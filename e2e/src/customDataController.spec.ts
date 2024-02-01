import { createClient, createInvalidClient } from './config';
import {
  Client,
  CustomFieldsController,
  Metadata,
  Metafield,
  ResourceType,
} from 'advanced-billing-sdk';
import {
  createCustomerTextMetadata,
  createCustomerDropdownMetadata,
  createSubscriptionTextMetadata,
  createSubscriptionDropdownMetadata,
  getMetadataIdList,
  removeCustomerMetadataList,
  removeSubscriptionsMetadataList,
} from './utils/customDataController';
import {
  createTextCustomersField,
  createTextSubscriptionField,
  createDropdownCustomersField,
  createDropdownSubscriptionField,
  removeCustomerCustomList,
  removeSubscriptionsCustomList,
} from './utils/customFieldsController';
import { createCustomer } from './utils/customers';
import { getObjectOfTwoKBString } from './utils/stringKB';
import { createSubscription } from './utils/subscription';

describe('Custom Metadata Controller', () => {
  const validClient: Client = createClient();
  const invalidClient: Client = createInvalidClient();

  const customFieldsController = new CustomFieldsController(validClient);
  const invalidCustomFieldsController = new CustomFieldsController(
    invalidClient
  );

  afterAll(async () => {
    await removeCustomerMetadataList();
    await removeSubscriptionsMetadataList();
    await removeCustomerCustomList();
    await removeSubscriptionsCustomList();
  });

  describe('Customer metadata', () => {
    let customerID: number;
    const customerResource: ResourceType = ResourceType.Customers;

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

      test('should thrown an error when create a single customer metadata with empty value.', async () => {
        const metadata = { name: textCustomerField.name };
        const payload = { metadata: [metadata] };
        try {
          await customFieldsController.createMetadata(
            customerResource,
            customerID,
            payload
          );
        } catch (error) {
          console.log(error);
        }
        /*expect(promise).rejects.toThrow();
        await promise.catch((error) => {
          expect(error.statusCode).toBe(422);
        });*/
      });

      test('should create a customer metadata with existing metafield attached to it with value greater than 2kb.', async () => {
        const string2KB = getObjectOfTwoKBString();
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
        expect(customData.metafieldId).toBe(textCustomerField.id);
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
        await removeCustomerMetadataList();
        await removeCustomerCustomList();
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
        expect(
          metadataIDs.includes(textMetaDataCustomerToList.id)
        ).toBeTruthy();
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
        await removeCustomerMetadataList();
        await removeCustomerCustomList();
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
        const dataToUpdate = {
          name: 'metadataNameToUpdate',
          currentName: metaDataCustomerToUpdateName.name,
          value: metaDataCustomerToUpdateName.value,
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
        const totalCountBeforeDelete =
          beforeListResponse.result.totalCount ?? 0;
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

        const afterListResponse =
          await customFieldsController.listMetadata(data);
        const afterMetadataNames = (
          afterListResponse.result.metadata || []
        ).map(({ name }: Metadata) => name);
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
        const totalCountBeforeDelete =
          beforeListResponse.result.totalCount ?? 0;
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

        const afterListResponse =
          await customFieldsController.listMetadata(data);
        const afterMetadataNames = (
          afterListResponse.result.metadata || []
        ).map(({ name }: Metadata) => name);
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
        const totalCountBeforeDelete =
          beforeListResponse.result.totalCount ?? 0;
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

        const afterListResponse =
          await customFieldsController.listMetadata(data);
        const afterMetadataNames = (
          afterListResponse.result.metadata || []
        ).map((customData: Metadata) => customData.name);
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
        await removeCustomerMetadataList();
        await removeCustomerCustomList();
        textFieldCustomerToResourceList = await createTextCustomersField(
          'listTextCustomerResource'
        );
        dropdownFieldCustomerToResourceList =
          await createDropdownCustomersField('listDropdownCustomerResource');
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
        const totalCountBeforeDelete =
          beforeListResponse.result.totalCount ?? 0;
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
        expect(totalCountBeforeDelete).toBe(DEFAULT_LENGTH + 1);

        const { statusCode } = await customFieldsController.deleteMetadata(
          customerResource,
          customerID,
          firstTextCustomerMetadataResource.name
        );
        expect(statusCode).toBe(200);

        const afterListResponse =
          await customFieldsController.listMetadata(data);
        const afterMetadataNames = (
          afterListResponse.result.metadata || []
        ).map(({ name }: Metadata) => name);
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

  describe('Subscription metadata', () => {
    let subscriptionID: number;
    const subscriptionResource: ResourceType = ResourceType.Subscriptions;

    beforeAll(async () => {
      const name = String(Math.floor(Math.random() * 999999999));
      const { subscriptionResponse } = await createSubscription({
        productFamilyName: `metadata-${name}-invoice`,
        productHandle: `metadata-${name}-invoice-handler`,
        customerReference: `metadata-${name}-invoice-reference`,
      });
      subscriptionID = subscriptionResponse?.subscription?.id ?? 0;
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
        expect(dropdownCustomData.metafieldId).toBe(
          dropdownSubscriptionField.id
        );
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

      test('should response with null values when create a single subscription metadata with empty value.', async () => {
        const metadata = { name: textSubscriptionField.name };
        const payload = { metadata: [metadata] };
        const response = await customFieldsController.createMetadata(
          subscriptionResource,
          subscriptionID,
          payload
        );

        console.log(response);
      });

      test('should create a subscription metadata with existing metafield attached to it with value greater than 2kb.', async () => {
        const string2KB = getObjectOfTwoKBString();
        const metadata = {
          name: textSubscriptionField.name,
          value: string2KB.value,
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
          value: metaDataSubscriptionToUpdateName.value,
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
        const totalCountBeforeDelete =
          beforeListResponse.result.totalCount ?? 0;
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

        const afterListResponse =
          await customFieldsController.listMetadata(data);
        const afterMetadataNames = (
          afterListResponse.result.metadata || []
        ).map(({ name }: Metadata) => name);
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
        const totalCountBeforeDelete =
          beforeListResponse.result.totalCount ?? 0;
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

        const afterListResponse =
          await customFieldsController.listMetadata(data);
        const afterMetadataNames = (
          afterListResponse.result.metadata || []
        ).map(({ name }: Metadata) => name);
        expect(afterListResponse.statusCode).toBe(200);
        expect(afterListResponse.result.totalCount).toBe(
          totalCountBeforeDelete - 2
        );
        expect(afterMetadataNames).toHaveLength(totalCountBeforeDelete - 2);
        expect(
          afterMetadataNames?.includes(textSubscriptionMetadataToDelete.name)
        ).toBeFalsy();
        expect(
          afterMetadataNames?.includes(
            dropdownSubscriptionMetadataToDelete.name
          )
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
        const totalCountBeforeDelete =
          beforeListResponse.result.totalCount ?? 0;
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

        const afterListResponse =
          await customFieldsController.listMetadata(data);
        const afterMetadataNames = (
          afterListResponse.result.metadata || []
        ).map((customData: Metadata) => customData.name);
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
        const totalCountBeforeDelete =
          beforeListResponse.result.totalCount ?? 0;
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

        const afterListResponse =
          await customFieldsController.listMetadata(data);
        const afterMetadataNames = (
          afterListResponse.result.metadata || []
        ).map(({ name }: Metadata) => name);
        expect(afterListResponse.statusCode).toBe(200);
        expect(afterListResponse.result.totalCount).toBe(
          totalCountBeforeDelete - 1
        );
        expect(
          afterMetadataNames?.includes(
            firstTextSubscriptionMetadataResource.name
          )
        ).toBeFalsy();
        expect(
          afterMetadataNames?.includes(
            textMetaDataSubscriptionResourceList.name
          )
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
});
