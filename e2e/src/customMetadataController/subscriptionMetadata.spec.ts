import { createClient, createInvalidClient } from '../config';
import {
  Client,
  CustomFieldsController,
  Metadata,
  Metafield,
  ResourceType,
} from 'advanced-billing-sdk';
import {
  createSubscriptionTextMetadata,
  createSubscriptionDropdownMetadata,
  getMetadataIdList,
  removeSubscriptionsMetadataList,
} from './utils';
import {
  createTextSubscriptionField,
  createDropdownSubscriptionField,
  removeSubscriptionsCustomList,
} from '../utils/customFieldsController';
import { get2KbObject } from '../utils/stringKB';
import { createSubscription } from '../utils/subscription';

describe('Subscription metadata', () => {
  let subscriptionID: number;
  const subscriptionResource: ResourceType = ResourceType.Subscriptions;
  const validClient: Client = createClient();
  const invalidClient: Client = createInvalidClient();
  const customFieldsController = new CustomFieldsController(validClient);
  const invalidCustomFieldsController = new CustomFieldsController(
    invalidClient
  );

  beforeAll(async () => {
    const randomCode = String(Math.floor(Math.random() * 999999999));
    const { subscriptionResponse } = await createSubscription({
      productFamilyName: `metadata-${randomCode}-invoice`,
      productHandle: `metadata-${randomCode}-invoice-handler`,
      customerReference: `metadata-${randomCode}-invoice-reference`,
    });
    subscriptionID = subscriptionResponse?.subscription?.id ?? 0;
  });

  afterAll(async () => {
    await removeSubscriptionsMetadataList();
    await removeSubscriptionsCustomList();
  });

  describe('Create subscription metadata', () => {
    let textSubscriptionField: Metafield;

    beforeAll(async () => {
      textSubscriptionField = await createTextSubscriptionField(
        'textSubscriptionFieldToCreate'
      );
    });

    test('should create a subscription metadata with existing metafield attached to metadata.', async () => {
      const metadata = {
        name: textSubscriptionField.name,
        value: 'Blue',
      };
      const payload = { metadata: [metadata] };
      const {
        statusCode,
        result: [customData],
      } = await customFieldsController.createMetadata(
        subscriptionResource,
        subscriptionID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(customData.resourceId).toBe(subscriptionID);
      expect(customData.name).toBe(metadata.name);
      expect(customData.value).toBe(metadata.value);
    });

    test('should create a subscription multiple metadata with existing metafields for attached to metadata.', async () => {
      const dropdownSubscriptionField = await createDropdownSubscriptionField(
        'dropdownSubscriptionFieldToCreate'
      );
      const textMetadata = {
        name: textSubscriptionField.name,
        value: 'Yellow',
      };
      const dropdownMetadata = {
        name: dropdownSubscriptionField.name,
        value: 'firstOption',
      };
      const payload = {
        metadata: [textMetadata, dropdownMetadata],
      };
      const {
        statusCode,
        result: [textCustomData, dropdownCustomData],
      } = await customFieldsController.createMetadata(
        subscriptionResource,
        subscriptionID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(textCustomData.resourceId).toBe(subscriptionID);
      expect(textCustomData.metafieldId).toBe(textSubscriptionField.id);
      expect(textCustomData.name).toBe(textMetadata.name);
      expect(textCustomData.value).toBe(textMetadata.value);
      expect(dropdownCustomData.resourceId).toBe(subscriptionID);
      expect(dropdownCustomData.metafieldId).toBe(dropdownSubscriptionField.id);
      expect(dropdownCustomData.name).toBe(dropdownMetadata.name);
      expect(dropdownCustomData.value).toBe(dropdownMetadata.value);
    });

    test('should thrown an error when create a single subscription metadata with empty name.', async () => {
      const errorMessage =
        "'name' must be present to create or update metafields";
      const metadata = { value: 'Blue' };
      const payload = { metadata: [metadata] };
      const promise = customFieldsController.createMetadata(
        subscriptionResource,
        subscriptionID,
        payload
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.result.error).toEqual(errorMessage);
      });
    });

    test('should not throw an error when create a single subscription metadata with empty value.', async () => {
      const metadata = { name: textSubscriptionField.name };
      const payload = { metadata: [metadata] };
      const response = await customFieldsController.createMetadata(
        subscriptionResource,
        subscriptionID,
        payload
      );
      expect(response.result.length).toBeGreaterThan(0);
    });

    test('should create a subscription metadata with existing metafield attached to it with value greater than 2kb.', async () => {
      const string2KB = get2KbObject();
      const metadata = {
        name: textSubscriptionField.name,
        value: string2KB.value || '',
      };
      const payload = { metadata: [metadata] };
      const {
        statusCode,
        result: [customData],
      } = await customFieldsController.createMetadata(
        subscriptionResource,
        subscriptionID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(string2KB.size).toBeGreaterThanOrEqual(2);
      expect(customData.resourceId).toBe(subscriptionID);
      expect(customData.metafieldId).toBe(textSubscriptionField.id);
      expect(customData.name).toBe(metadata.name);
      expect(customData.value).toBe(metadata.value);
    });

    test('should thrown an error when create a single subscription metadata with unauthorized access.', async () => {
      const metadata = {
        name: textSubscriptionField.name,
        value: 'Blue',
      };
      const payload = { metadata: [metadata] };
      const promise = invalidCustomFieldsController.createMetadata(
        subscriptionResource,
        subscriptionID,
        payload
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('List subscription metadata', () => {
    let textFieldToList: Metafield;
    let dropdownFieldToList: Metafield;
    let textMetaDataToList: Metadata;
    let dropdownMetaDataToList: Metadata;

    const DEFAULT_LENGTH = 2;
    const DEFAULT_PAGE = 1;
    const DEFAULT_PER_PAGE = 20;

    beforeAll(async () => {
      await removeSubscriptionsMetadataList();
      await removeSubscriptionsCustomList();
      textFieldToList = await createTextSubscriptionField(
        'listTextSubscription'
      );
      dropdownFieldToList = await createDropdownSubscriptionField(
        'listDropdownSubscription'
      );
      textMetaDataToList = await createSubscriptionTextMetadata(
        subscriptionID,
        textFieldToList.name
      );
      dropdownMetaDataToList = await createSubscriptionDropdownMetadata(
        subscriptionID,
        dropdownFieldToList.name,
        'firstOption'
      );
    });

    test('should list a subscription metadata for a specified resource ID.', async () => {
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
      };
      const {
        statusCode,
        result: { totalCount, metadata = [], currentPage, perPage },
      } = await customFieldsController.listMetadata(data);
      const [firstData, secondData] = metadata;
      const metadataIDs = getMetadataIdList(metadata);
      expect(statusCode).toBe(200);
      expect(totalCount).toBeGreaterThanOrEqual(DEFAULT_LENGTH);
      expect(currentPage).toBe(DEFAULT_PAGE);
      expect(perPage).toBe(DEFAULT_PER_PAGE);
      expect(metadataIDs.includes(textMetaDataToList.id)).toBeTruthy();
      expect(metadataIDs.includes(dropdownMetaDataToList.id)).toBeTruthy();
      expect(firstData.resourceId).toBe(subscriptionID);
      expect(secondData.resourceId).toBe(subscriptionID);
    });

    test('should list a subscription metadata for a specified resource ID and pagination.', async () => {
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
        page: 2,
        perPage: 1,
      };
      const {
        statusCode,
        result: { totalCount, metadata = [], currentPage, perPage },
      } = await customFieldsController.listMetadata(data);
      const [customMetaData] = metadata;
      expect(statusCode).toBe(200);
      expect(totalCount).toBeGreaterThanOrEqual(DEFAULT_LENGTH);
      expect(currentPage).toBe(data.page);
      expect(perPage).toBe(data.perPage);
      expect(customMetaData.resourceId).toBe(subscriptionID);
    });

    test('should thrown an error when list a subscription metadata with unauthorized access.', async () => {
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
      };
      const promise = invalidCustomFieldsController.listMetadata(data);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should thrown an error when list a subscription metadata with negative page.', async () => {
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
        page: -1,
        perPage: 1,
      };
      const promise = customFieldsController.listMetadata(data);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
      });
    });

    test('should list a subscription metadata with perPage by default when set negative perPage.', async () => {
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
        page: 1,
        perPage: -1,
      };
      const {
        statusCode,
        result: { totalCount, currentPage, perPage },
      } = await customFieldsController.listMetadata(data);
      expect(statusCode).toBe(200);
      expect(totalCount).toBeGreaterThanOrEqual(2);
      expect(currentPage).toBe(data.page);
      expect(perPage).toBe(DEFAULT_PER_PAGE);
    });
  });

  describe('Update subscription metadata', () => {
    let textFieldSubscriptionToUpdate: Metafield;
    let textMetaDataSubscriptionToUpdate: Metadata;

    beforeAll(async () => {
      await removeSubscriptionsMetadataList();
      await removeSubscriptionsCustomList();
      textFieldSubscriptionToUpdate = await createTextSubscriptionField(
        'textFieldSubscriptionNameToUpdate'
      );
      textMetaDataSubscriptionToUpdate = await createSubscriptionTextMetadata(
        subscriptionID,
        textFieldSubscriptionToUpdate.name
      );
    });

    test('should update a customer value of metadata by metadata name.', async () => {
      const dataToUpdate = {
        name: textMetaDataSubscriptionToUpdate.name,
        currentName: textMetaDataSubscriptionToUpdate.name,
        value: 'UpdatedValue',
      };
      const payload = { metadata: dataToUpdate };
      const {
        statusCode,
        result: [customDataUpdated],
      } = await customFieldsController.updateMetadata(
        subscriptionResource,
        subscriptionID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(customDataUpdated.resourceId).toBe(subscriptionID);
      expect(customDataUpdated.id).toBe(textMetaDataSubscriptionToUpdate.id);
      expect(customDataUpdated.name).toBe(dataToUpdate.name);
      expect(customDataUpdated.value).toBe(dataToUpdate.value);
    });

    test('should update a subscription metadata name by metadata name.', async () => {
      const firstTextFieldSubscriptionToUpdate =
        await createTextSubscriptionField(
          'firstTextMetadataSubscriptionToUpdate'
        );
      const metaDataSubscriptionToUpdateName =
        await createSubscriptionTextMetadata(
          subscriptionID,
          firstTextFieldSubscriptionToUpdate.name
        );
      const dataToUpdate = {
        name: 'subscriptionMetadataNameToUpdate',
        currentName: metaDataSubscriptionToUpdateName.name,
        value: metaDataSubscriptionToUpdateName.value || '',
      };
      const payload = { metadata: dataToUpdate };
      const {
        statusCode,
        result: [customData],
      } = await customFieldsController.updateMetadata(
        subscriptionResource,
        subscriptionID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(customData.resourceId).toBe(subscriptionID);
      expect(customData.id).toBe(metaDataSubscriptionToUpdateName.id);
      expect(customData.name).toBe(dataToUpdate.name);
    });

    test('should create new subscription metadata when update metadata with missing current name.', async () => {
      const secondTextFieldSubsctiptionToUpdate =
        await createTextSubscriptionField(
          'secondTextMetadataSubscriptionToUpdate'
        );
      const secondMetaDataCustomerToUpdateName =
        await createSubscriptionTextMetadata(
          subscriptionID,
          secondTextFieldSubsctiptionToUpdate.name
        );
      const dataToUpdate = {
        name: secondMetaDataCustomerToUpdateName.name,
        value: 'NewSubscriptionValue',
      };
      const payload = { metadata: dataToUpdate };
      const {
        statusCode,
        result: [customData],
      } = await customFieldsController.updateMetadata(
        subscriptionResource,
        subscriptionID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(customData.resourceId).toBe(subscriptionID);
      expect(customData.id).toBe(secondMetaDataCustomerToUpdateName.id);
      expect(customData.name).toBe(dataToUpdate.name);
      expect(customData.value).toBe(dataToUpdate.value);
    });
  });

  describe('Delete subscription metadata', () => {
    test('should delete a subscription metadata by name.', async () => {
      const firstTextSubscriptionFieldToDelete =
        await createTextSubscriptionField('textSubscriptionToDelete');
      const textSubscriptionMetadataToDelete =
        await createSubscriptionTextMetadata(
          subscriptionID,
          firstTextSubscriptionFieldToDelete.name
        );
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
      };
      const beforeListResponse =
        await customFieldsController.listMetadata(data);
      const metadataNames = (beforeListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      const totalCountBeforeDelete = beforeListResponse.result.totalCount ?? 0;
      expect(beforeListResponse.statusCode).toBe(200);
      expect(
        metadataNames?.includes(textSubscriptionMetadataToDelete.name)
      ).toBeTruthy();

      const { statusCode } = await customFieldsController.deleteMetadata(
        subscriptionResource,
        subscriptionID,
        textSubscriptionMetadataToDelete.name
      );
      expect(statusCode).toBe(200);

      const afterListResponse = await customFieldsController.listMetadata(data);
      const afterMetadataNames = (afterListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      expect(afterListResponse.statusCode).toBe(200);
      expect(afterListResponse.result.totalCount).toBe(
        totalCountBeforeDelete - 1
      );
      expect(
        afterMetadataNames?.includes(textSubscriptionMetadataToDelete.name)
      ).toBeFalsy();
    });

    test('should delete a subscription metadata list.', async () => {
      const secondTextSubscriptionFieldToDelete =
        await createTextSubscriptionField('secondTextSubscriptionToDelete');
      const firstDropDownSubscriptionFieldToDelente =
        await createDropdownSubscriptionField(
          'firstDropdownSubscriptionToDelete'
        );
      const textSubscriptionMetadataToDelete =
        await createSubscriptionTextMetadata(
          subscriptionID,
          secondTextSubscriptionFieldToDelete.name
        );
      const dropdownSubscriptionMetadataToDelete =
        await createSubscriptionDropdownMetadata(
          subscriptionID,
          firstDropDownSubscriptionFieldToDelente.name,
          'firstOption'
        );
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
      };
      const beforeListResponse =
        await customFieldsController.listMetadata(data);
      const metadataNames = (beforeListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      const totalCountBeforeDelete = beforeListResponse.result.totalCount ?? 0;
      expect(beforeListResponse.statusCode).toBe(200);
      expect(
        metadataNames?.includes(textSubscriptionMetadataToDelete.name)
      ).toBeTruthy();
      expect(
        metadataNames?.includes(dropdownSubscriptionMetadataToDelete.name)
      ).toBeTruthy();

      const namesToDelete = [
        textSubscriptionMetadataToDelete.name ?? '',
        dropdownSubscriptionMetadataToDelete.name ?? '',
      ];
      const { statusCode } = await customFieldsController.deleteMetadata(
        subscriptionResource,
        subscriptionID,
        '',
        namesToDelete
      );
      expect(statusCode).toBe(200);

      const afterListResponse = await customFieldsController.listMetadata(data);
      const afterMetadataNames = (afterListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      expect(afterListResponse.statusCode).toBe(200);
      expect(afterListResponse.result.totalCount).toBe(
        totalCountBeforeDelete - 2
      );
      expect(afterMetadataNames).toHaveLength(totalCountBeforeDelete - 2);
      expect(
        afterMetadataNames?.includes(textSubscriptionMetadataToDelete.name)
      ).toBeFalsy();
      expect(
        afterMetadataNames?.includes(dropdownSubscriptionMetadataToDelete.name)
      ).toBeFalsy();
    });

    test('should delete a subscription metadata list with name and names defined.', async () => {
      const thirdTextSubscriptionFieldToDelete =
        await createTextSubscriptionField('thirdTextSubscriptionToDelete');
      const thirdDropDownSubscriptionFieldToDelete =
        await createDropdownSubscriptionField(
          'thirdDropdownSubscriptionToDelete'
        );
      const thirdTextSubscriptionMetadata =
        await createSubscriptionTextMetadata(
          subscriptionID,
          thirdTextSubscriptionFieldToDelete.name
        );
      const thirdDropdownSubscriptionMetadata =
        await createSubscriptionDropdownMetadata(
          subscriptionID,
          thirdDropDownSubscriptionFieldToDelete.name,
          'firstOption'
        );
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
      };
      const beforeListResponse =
        await customFieldsController.listMetadata(data);
      const metadataNames = (beforeListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      const totalCountBeforeDelete = beforeListResponse.result.totalCount ?? 0;
      expect(beforeListResponse.statusCode).toBe(200);
      expect(
        metadataNames?.includes(thirdTextSubscriptionMetadata.name)
      ).toBeTruthy();
      expect(
        metadataNames?.includes(thirdDropdownSubscriptionMetadata.name)
      ).toBeTruthy();

      const namesToDelete = [thirdDropdownSubscriptionMetadata.name || ''];
      const { statusCode } = await customFieldsController.deleteMetadata(
        subscriptionResource,
        subscriptionID,
        thirdTextSubscriptionMetadata.name,
        namesToDelete
      );
      expect(statusCode).toBe(200);

      const afterListResponse = await customFieldsController.listMetadata(data);
      const afterMetadataNames = (afterListResponse.result.metadata || []).map(
        (customData: Metadata) => customData.name
      );
      expect(afterListResponse.statusCode).toBe(200);
      expect(afterListResponse.result.totalCount).toBe(
        totalCountBeforeDelete - 2
      );
      expect(afterMetadataNames).toHaveLength(totalCountBeforeDelete - 2);
      expect(
        afterMetadataNames?.includes(thirdTextSubscriptionMetadata.name)
      ).toBeFalsy();
      expect(
        afterMetadataNames?.includes(thirdDropdownSubscriptionMetadata.name)
      ).toBeFalsy();
    });

    test('should thrown an error when remove a subscription metadata with not existing resource.', async () => {
      const promise = customFieldsController.deleteMetadata(
        subscriptionResource,
        99999999,
        'SomeName'
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should thrown an error when remove a subscription metadata with not existing name.', async () => {
      const promise = customFieldsController.deleteMetadata(
        subscriptionResource,
        subscriptionID,
        'NoExistingMetadata'
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });

  describe('List metadata by subscription resource', () => {
    let textFieldSubscriptionResourceList: Metafield;
    let dropdownFieldSubscriptionResourceList: Metafield;
    let textMetaDataSubscriptionResourceList: Metadata;
    let dropdownMetaDataSubscriptionResourceList: Metadata;

    const DEFAULT_LENGTH = 2;
    const DEFAULT_PAGE = 1;
    const DEFAULT_PER_PAGE = 20;

    beforeAll(async () => {
      await removeSubscriptionsMetadataList();
      await removeSubscriptionsCustomList();
      textFieldSubscriptionResourceList = await createTextSubscriptionField(
        'listTextSubscriptionResource'
      );
      dropdownFieldSubscriptionResourceList =
        await createDropdownSubscriptionField(
          'listDropdownSubscriptionResource'
        );
      textMetaDataSubscriptionResourceList =
        await createSubscriptionTextMetadata(
          subscriptionID,
          textFieldSubscriptionResourceList.name
        );
      dropdownMetaDataSubscriptionResourceList =
        await createSubscriptionDropdownMetadata(
          subscriptionID,
          dropdownFieldSubscriptionResourceList.name,
          'firstOption'
        );
    });

    test('should list a customer metadata for a specified customer resource ID.', async () => {
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
      };
      const {
        statusCode,
        result: { totalCount, metadata = [], currentPage, perPage },
      } = await customFieldsController.listMetadata(data);

      const [firstData, secondData] = metadata;
      const metadataIDs = getMetadataIdList(metadata);
      expect(statusCode).toBe(200);
      expect(totalCount).toBeGreaterThanOrEqual(DEFAULT_LENGTH);
      expect(currentPage).toBe(DEFAULT_PAGE);
      expect(perPage).toBe(DEFAULT_PER_PAGE);
      expect(
        metadataIDs.includes(textMetaDataSubscriptionResourceList.id)
      ).toBeTruthy();
      expect(
        metadataIDs.includes(dropdownMetaDataSubscriptionResourceList.id)
      ).toBeTruthy();
      expect(firstData.resourceId).toBe(subscriptionID);
      expect(secondData.resourceId).toBe(subscriptionID);
    });

    test('should list a subscription metadata for a specified subscription resource ID and pagination.', async () => {
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
        page: 2,
        perPage: 1,
      };
      const {
        statusCode,
        result: { totalCount, metadata = [], currentPage, perPage },
      } = await customFieldsController.listMetadata(data);
      const [customMetaData] = metadata;
      expect(statusCode).toBe(200);
      expect(totalCount).toBeGreaterThanOrEqual(DEFAULT_LENGTH);
      expect(currentPage).toBe(data.page);
      expect(perPage).toBe(data.perPage);
      expect(customMetaData.resourceId).toBe(subscriptionID);
    });

    test('should list a subscription metadata for a specified subscription resource ID before and after one metadata was removed.', async () => {
      const firstTextSubscriptionFieldResource =
        await createTextSubscriptionField('firstTextSubscriptionResource');
      const firstTextSubscriptionMetadataResource =
        await createSubscriptionTextMetadata(
          subscriptionID,
          firstTextSubscriptionFieldResource.name
        );
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
      };

      const beforeListResponse =
        await customFieldsController.listMetadata(data);
      const metadataNames = (beforeListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      const totalCountBeforeDelete = beforeListResponse.result.totalCount ?? 0;
      expect(beforeListResponse.statusCode).toBe(200);
      expect(
        metadataNames?.includes(firstTextSubscriptionMetadataResource.name)
      ).toBeTruthy();
      expect(
        metadataNames?.includes(textMetaDataSubscriptionResourceList.name)
      ).toBeTruthy();
      expect(
        metadataNames?.includes(dropdownMetaDataSubscriptionResourceList.name)
      ).toBeTruthy();
      expect(totalCountBeforeDelete).toBe(DEFAULT_LENGTH + 1);

      const { statusCode } = await customFieldsController.deleteMetadata(
        subscriptionResource,
        subscriptionID,
        firstTextSubscriptionMetadataResource.name
      );
      expect(statusCode).toBe(200);

      const afterListResponse = await customFieldsController.listMetadata(data);
      const afterMetadataNames = (afterListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      expect(afterListResponse.statusCode).toBe(200);
      expect(afterListResponse.result.totalCount).toBe(
        totalCountBeforeDelete - 1
      );
      expect(
        afterMetadataNames?.includes(firstTextSubscriptionMetadataResource.name)
      ).toBeFalsy();
      expect(
        afterMetadataNames?.includes(textMetaDataSubscriptionResourceList.name)
      ).toBeTruthy();
      expect(
        afterMetadataNames?.includes(
          dropdownMetaDataSubscriptionResourceList.name
        )
      ).toBeTruthy();
    });

    test('should thrown an error when list a subscription resource metadata with unauthorized access.', async () => {
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
      };
      const promise = invalidCustomFieldsController.listMetadata(data);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should thrown an error when list a subscription resource metadata with negative page.', async () => {
      const data = {
        resourceType: subscriptionResource,
        resourceId: subscriptionID,
        page: -1,
        perPage: 1,
      };
      const promise = customFieldsController.listMetadata(data);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
      });
    });
  });
});
