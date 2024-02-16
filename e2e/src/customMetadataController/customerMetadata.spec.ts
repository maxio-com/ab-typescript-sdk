import { createClient, createInvalidClient } from '../config';
import {
  Client,
  CustomFieldsController,
  Metadata,
  Metafield,
  ResourceType,
  UpdateMetadata,
} from 'advanced-billing-sdk';
import {
  createCustomerTextMetadata,
  createCustomerDropdownMetadata,
  getMetadataIdList,
} from './utils';
import {
  createTextCustomersField,
  createDropdownCustomersField,
} from '../utils/customFieldsController';
import { createCustomer } from '../utils/customers';
import { get2KbObject } from '../utils/stringKB';
import { uid } from 'uid';

describe('Customer metadata', () => {
  let customerID: number;
  const customerResource: ResourceType = ResourceType.Customers;
  const validClient: Client = createClient();
  const invalidClient: Client = createInvalidClient();
  const customFieldsController = new CustomFieldsController(validClient);
  const invalidCustomFieldsController = new CustomFieldsController(
    invalidClient
  );

  beforeAll(async () => {
    const { id = 0 } = await createCustomer();
    customerID = id;
  });

  describe('Create customer metadata', () => {
    let textCustomerField: Metafield;

    beforeAll(async () => {
      textCustomerField = await createTextCustomersField(
        'textCustomerFieldToCreate'
      );
    });

    test('should create a customer metadata with existing metafield for attach to metadata.', async () => {
      const textFieldName = `${uid()}-create`;
      const textCustomerField = await createTextCustomersField(textFieldName);
      const metadata = {
        name: textCustomerField.name,
        value: 'Blue',
      };
      const payload = {
        metadata: [metadata],
      };
      const {
        statusCode,
        result: [customData],
      } = await customFieldsController.createMetadata(
        customerResource,
        customerID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(customData.resourceId).toBe(customerID);
      expect(customData.metafieldId).toBe(textCustomerField.id);
      expect(customData.name).toBe(metadata.name);
      expect(customData.value).toBe(metadata.value);
    });

    test('should create a customer multiple metadata with existing metafields for attached to metadata.', async () => {
      const textFieldName = `${uid()}-create`;
      const textCustomerField = await createTextCustomersField(textFieldName);
      const dropdownCustomerField = await createDropdownCustomersField(
        'dropdownCustomerFieldToCreate'
      );
      const textMetadata = {
        name: textCustomerField.name,
        value: 'Yellow',
      };
      const dropdownMetadata = {
        name: dropdownCustomerField.name,
        value: 'firstOption',
      };
      const payload = {
        metadata: [textMetadata, dropdownMetadata],
      };
      const {
        statusCode,
        result: [textCustomData, dropdownCustomData],
      } = await customFieldsController.createMetadata(
        customerResource,
        customerID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(textCustomData.resourceId).toBe(customerID);
      expect(textCustomData.metafieldId).toBe(textCustomerField.id);
      expect(textCustomData.name).toBe(textMetadata.name);
      expect(textCustomData.value).toBe(textMetadata.value);
      expect(dropdownCustomData.resourceId).toBe(customerID);
      expect(dropdownCustomData.metafieldId).toBe(dropdownCustomerField.id);
      expect(dropdownCustomData.name).toBe(dropdownMetadata.name);
      expect(dropdownCustomData.value).toBe(dropdownMetadata.value);
    });

    test('should thrown an error when create a single customer metadata with empty name.', async () => {
      const errorMessage =
        "'name' must be present to create or update metafields";
      const metadata = { value: 'Blue' };
      const payload = { metadata: [metadata] };
      const promise = customFieldsController.createMetadata(
        customerResource,
        customerID,
        payload
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.result.error).toEqual(errorMessage);
      });
    });

    test('should not thrown an error when create a single customer metadata with empty value.', async () => {
      const metadata = { name: textCustomerField.name };
      const payload = { metadata: [metadata] };
      const response = await customFieldsController.createMetadata(
        customerResource,
        customerID,
        payload
      );

      expect(response.result.length).toBeGreaterThan(0);
    });

    test('should create a customer metadata with existing metafield attached to it with value greater than 2kb.', async () => {
      const string2KB = get2KbObject();
      const metadata = {
        name: textCustomerField.name,
        value: string2KB.value,
      };
      const payload = { metadata: [metadata] };
      const {
        statusCode,
        result: [customData],
      } = await customFieldsController.createMetadata(
        customerResource,
        customerID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(string2KB.size).toBeGreaterThanOrEqual(2);
      expect(customData.resourceId).toBe(customerID);
      expect(customData.name).toBe(metadata.name);
      expect(customData.value).toBe(metadata.value);
    });

    test('should thrown an error when create a single customer metadata with unauthorized access.', async () => {
      const metadata = {
        name: textCustomerField.name,
        value: 'Blue',
      };
      const payload = { metadata: [metadata] };
      const promise = invalidCustomFieldsController.createMetadata(
        customerResource,
        customerID,
        payload
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('List customer metadata', () => {
    let textFieldCustomerToList: Metafield;
    let dropdownFieldCustomerToList: Metafield;
    let textMetaDataCustomerToList: Metadata;
    let dropdownMetaCustomerDataToList: Metadata;

    const DEFAULT_LENGTH = 2;
    const DEFAULT_PAGE = 1;
    const DEFAULT_PER_PAGE = 20;

    beforeAll(async () => {
      textFieldCustomerToList =
        await createTextCustomersField('listTextCustomer');
      dropdownFieldCustomerToList = await createDropdownCustomersField(
        'listDropdownCustomer'
      );
      textMetaDataCustomerToList = await createCustomerTextMetadata(
        customerID,
        textFieldCustomerToList.name
      );
      dropdownMetaCustomerDataToList = await createCustomerDropdownMetadata(
        customerID,
        dropdownFieldCustomerToList.name,
        'firstOption'
      );
    });

    test('should list a customer metadata for a specified resource ID.', async () => {
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
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
      expect(metadataIDs.includes(textMetaDataCustomerToList.id)).toBeTruthy();
      expect(
        metadataIDs.includes(dropdownMetaCustomerDataToList.id)
      ).toBeTruthy();
      expect(firstData.resourceId).toBe(customerID);
      expect(secondData.resourceId).toBe(customerID);
    });

    test('should list a customer metadata for a specified resource ID and pagination.', async () => {
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
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
      expect(customMetaData.resourceId).toBe(customerID);
    });

    test('should thrown an error when list a customer metadata with unauthorized access.', async () => {
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
      };
      const promise = invalidCustomFieldsController.listMetadata(data);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should thrown an error when list a customer metadata with negative page.', async () => {
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
        page: -1,
        perPage: 1,
      };
      const promise = customFieldsController.listMetadata(data);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
      });
    });

    test('should list a customer metadata with perPage by default when set negative perPage.', async () => {
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
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

  describe('Update customer metadata', () => {
    let textFieldCustomerToUpdate: Metafield;
    let textMetaDataCustomerToUpdate: Metadata;

    beforeAll(async () => {
      textFieldCustomerToUpdate = await createTextCustomersField(
        'textCustomerToUpdate'
      );
      textMetaDataCustomerToUpdate = await createCustomerTextMetadata(
        customerID,
        textFieldCustomerToUpdate.name
      );
    });

    test('should update a customer value of metadata by metadata name.', async () => {
      const dataToUpdate = {
        name: textMetaDataCustomerToUpdate.name,
        currentName: textMetaDataCustomerToUpdate.name,
        value: 'UpdatedValue',
      };
      const payload = { metadata: dataToUpdate };
      const {
        statusCode,
        result: [customDataUpdated],
      } = await customFieldsController.updateMetadata(
        customerResource,
        customerID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(customDataUpdated.resourceId).toBe(customerID);
      expect(customDataUpdated.id).toBe(textMetaDataCustomerToUpdate.id);
      expect(customDataUpdated.name).toBe(dataToUpdate.name);
      expect(customDataUpdated.value).toBe(dataToUpdate.value);
    });

    test('should update a customer metadata name by metadata name.', async () => {
      const firstTextFieldCustomerToUpdate = await createTextCustomersField(
        'firstTextMetadataCustomerToUpdate'
      );
      const metaDataCustomerToUpdateName = await createCustomerTextMetadata(
        customerID,
        firstTextFieldCustomerToUpdate.name
      );
      const dataToUpdate: UpdateMetadata = {
        name: 'metadataNameToUpdate',
        currentName: metaDataCustomerToUpdateName.name,
        value: metaDataCustomerToUpdateName.value || '',
      };
      const payload = { metadata: dataToUpdate };
      const {
        statusCode,
        result: [customData],
      } = await customFieldsController.updateMetadata(
        customerResource,
        customerID,
        payload
      );

      expect(statusCode).toBe(200);
      expect(customData.resourceId).toBe(customerID);
      expect(customData.id).toBe(metaDataCustomerToUpdateName.id);
      expect(customData.name).toBe(dataToUpdate.name);
    });

    test('should create new customer metadata when update metadata with missing current name.', async () => {
      const secondTextFieldCustomerToUpdate = await createTextCustomersField(
        'secondTextMetadataCustomerToUpdate'
      );
      const secondMetaDataCustomerToUpdateName =
        await createCustomerTextMetadata(
          customerID,
          secondTextFieldCustomerToUpdate.name
        );
      const dataToUpdate = {
        name: secondMetaDataCustomerToUpdateName.name,
        value: 'NewValue',
      };
      const payload = { metadata: dataToUpdate };
      const {
        statusCode,
        result: [customData],
      } = await customFieldsController.updateMetadata(
        customerResource,
        customerID,
        payload
      );
      expect(statusCode).toBe(200);
      expect(customData.resourceId).toBe(customerID);
      expect(customData.id).toBe(secondMetaDataCustomerToUpdateName.id);
      expect(customData.name).toBe(dataToUpdate.name);
      expect(customData.value).toBe(dataToUpdate.value);
    });
  });

  describe('Delete customer metadata', () => {
    test('should delete a customer metadata by name.', async () => {
      const firstTextCustomerFieldToDelete = await createTextCustomersField(
        'textCustomerToDelete'
      );
      const textCustomerMetadataToDelete = await createCustomerTextMetadata(
        customerID,
        firstTextCustomerFieldToDelete.name
      );
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
      };
      const beforeListResponse =
        await customFieldsController.listMetadata(data);
      const metadataNames = (beforeListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      const totalCountBeforeDelete = beforeListResponse.result.totalCount ?? 0;
      expect(beforeListResponse.statusCode).toBe(200);
      expect(
        metadataNames?.includes(textCustomerMetadataToDelete.name)
      ).toBeTruthy();

      const { statusCode } = await customFieldsController.deleteMetadata(
        customerResource,
        customerID,
        textCustomerMetadataToDelete.name
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
        afterMetadataNames?.includes(textCustomerMetadataToDelete.name)
      ).toBeFalsy();
    });

    test('should delete a customer metadata list.', async () => {
      const secondTextCustomerFieldToDelete = await createTextCustomersField(
        'secondTextCustomerToDelete'
      );
      const firstDropDownCustomerFieldToDelente =
        await createDropdownCustomersField('firstDropdownCustomerToDelete');
      const textCustomerMetadataToDelete = await createCustomerTextMetadata(
        customerID,
        secondTextCustomerFieldToDelete.name
      );
      const dropdownCustomerMetadataToDelete =
        await createCustomerDropdownMetadata(
          customerID,
          firstDropDownCustomerFieldToDelente.name,
          'firstOption'
        );
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
      };
      const beforeListResponse =
        await customFieldsController.listMetadata(data);
      const metadataNames = (beforeListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      const totalCountBeforeDelete = beforeListResponse.result.totalCount ?? 0;
      expect(beforeListResponse.statusCode).toBe(200);
      expect(
        metadataNames?.includes(textCustomerMetadataToDelete.name)
      ).toBeTruthy();
      expect(
        metadataNames?.includes(dropdownCustomerMetadataToDelete.name)
      ).toBeTruthy();

      const namesToDelete = [
        textCustomerMetadataToDelete.name ?? '',
        dropdownCustomerMetadataToDelete.name ?? '',
      ];
      const { statusCode } = await customFieldsController.deleteMetadata(
        customerResource,
        customerID,
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
        afterMetadataNames?.includes(textCustomerMetadataToDelete.name)
      ).toBeFalsy();
      expect(
        afterMetadataNames?.includes(dropdownCustomerMetadataToDelete.name)
      ).toBeFalsy();
    });

    test('should delete a customer metadata list with name and names defined.', async () => {
      const thirdTextCustomerFieldToDelete = await createTextCustomersField(
        'thirdTextCustomerToDelete'
      );
      const thirdDropDownCustomerFieldToDelete =
        await createDropdownCustomersField('thirdDropdownCustomerToDelete');
      const thirdTextCustomerMetadata = await createCustomerTextMetadata(
        customerID,
        thirdTextCustomerFieldToDelete.name
      );
      const thirdDropdownCustomerMetadata =
        await createCustomerDropdownMetadata(
          customerID,
          thirdDropDownCustomerFieldToDelete.name,
          'firstOption'
        );
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
      };
      const beforeListResponse =
        await customFieldsController.listMetadata(data);
      const metadataNames = (beforeListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      const totalCountBeforeDelete = beforeListResponse.result.totalCount ?? 0;
      expect(beforeListResponse.statusCode).toBe(200);
      expect(
        metadataNames?.includes(thirdTextCustomerMetadata.name)
      ).toBeTruthy();
      expect(
        metadataNames?.includes(thirdDropdownCustomerMetadata.name)
      ).toBeTruthy();

      const namesToDelete = [thirdDropdownCustomerMetadata.name || ''];
      const { statusCode } = await customFieldsController.deleteMetadata(
        customerResource,
        customerID,
        thirdTextCustomerMetadata.name,
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
        afterMetadataNames?.includes(thirdTextCustomerMetadata.name)
      ).toBeFalsy();
      expect(
        afterMetadataNames?.includes(thirdDropdownCustomerMetadata.name)
      ).toBeFalsy();
    });

    test('should thrown an error when remove a customer metadata with not existing resource.', async () => {
      const promise = customFieldsController.deleteMetadata(
        customerResource,
        99999999,
        'SomeName'
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should thrown an error when remove a customer metadata with not existing name.', async () => {
      const promise = customFieldsController.deleteMetadata(
        customerResource,
        customerID,
        'NoExistingMetadata'
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });

  describe('List metadata by customer resource', () => {
    let textFieldCustomerToResourceList: Metafield;
    let dropdownFieldCustomerToResourceList: Metafield;
    let textMetaDataCustomerToResourceList: Metadata;
    let dropdownMetaCustomerDataToResourceList: Metadata;

    const DEFAULT_LENGTH = 2;
    const DEFAULT_PAGE = 1;
    const DEFAULT_PER_PAGE = 20;

    beforeAll(async () => {
      textFieldCustomerToResourceList = await createTextCustomersField(
        'listTextCustomerResource'
      );
      dropdownFieldCustomerToResourceList = await createDropdownCustomersField(
        'listDropdownCustomerResource'
      );
      textMetaDataCustomerToResourceList = await createCustomerTextMetadata(
        customerID,
        textFieldCustomerToResourceList.name
      );
      dropdownMetaCustomerDataToResourceList =
        await createCustomerDropdownMetadata(
          customerID,
          dropdownFieldCustomerToResourceList.name,
          'firstOption'
        );
    });

    test('should list a customer metadata for a specified customer resource ID.', async () => {
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
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
        metadataIDs.includes(textMetaDataCustomerToResourceList.id)
      ).toBeTruthy();
      expect(
        metadataIDs.includes(dropdownMetaCustomerDataToResourceList.id)
      ).toBeTruthy();
      expect(firstData.resourceId).toBe(customerID);
      expect(secondData.resourceId).toBe(customerID);
    });

    test('should list a customer metadata for a specified customer resource ID and pagination.', async () => {
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
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
      expect(customMetaData.resourceId).toBe(customerID);
    });

    test('should list a customer metadata for a specified customer resource ID before and after one metadata was removed.', async () => {
      const firstTextCustomerFieldResource = await createTextCustomersField(
        'firstTextCustomerResource'
      );
      const firstTextCustomerMetadataResource =
        await createCustomerTextMetadata(
          customerID,
          firstTextCustomerFieldResource.name
        );
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
      };

      const beforeListResponse =
        await customFieldsController.listMetadata(data);
      const metadataNames = (beforeListResponse.result.metadata || []).map(
        ({ name }: Metadata) => name
      );
      const totalCountBeforeDelete = beforeListResponse.result.totalCount ?? 0;
      expect(beforeListResponse.statusCode).toBe(200);
      expect(
        metadataNames?.includes(firstTextCustomerMetadataResource.name)
      ).toBeTruthy();
      expect(
        metadataNames?.includes(textMetaDataCustomerToResourceList.name)
      ).toBeTruthy();
      expect(
        metadataNames?.includes(dropdownMetaCustomerDataToResourceList.name)
      ).toBeTruthy();
      expect(totalCountBeforeDelete).toBeGreaterThanOrEqual(DEFAULT_LENGTH + 1);

      const { statusCode } = await customFieldsController.deleteMetadata(
        customerResource,
        customerID,
        firstTextCustomerMetadataResource.name
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
        afterMetadataNames?.includes(firstTextCustomerMetadataResource.name)
      ).toBeFalsy();
      expect(
        afterMetadataNames?.includes(textMetaDataCustomerToResourceList.name)
      ).toBeTruthy();
      expect(
        afterMetadataNames?.includes(
          dropdownMetaCustomerDataToResourceList.name
        )
      ).toBeTruthy();
    });

    test('should thrown an error when list a customer resource metadata with unauthorized access.', async () => {
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
      };
      const promise = invalidCustomFieldsController.listMetadata(data);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should thrown an error when list a customer resource metadata with negative page.', async () => {
      const data = {
        resourceType: customerResource,
        resourceId: customerID,
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
