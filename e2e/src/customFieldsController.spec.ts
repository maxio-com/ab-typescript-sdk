import {
  CustomFieldsController,
  IncludeOption,
  Metafield,
  MetafieldInput,
  ResourceType,
  SortingDirection,
} from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';

import {
  createDropdownSubscriptionField,
  createRadioSubscriptionField,
  createTextCustomersField,
  createTextSubscriptionField,
  defaultEnum,
  dropdownData,
  excludeScope,
  includeScope,
  radioData,
  removeCustomerCustomList,
  removeSubscriptionsCustomList,
  switchedScope,
  textData,
} from './utils/customFieldsController';
import { createCustomer } from './utils/customers';

describe('Custom Fields Controller', () => {
  const validClient = createClient();
  const invalidClient = createInvalidClient();

  const customFieldsController = new CustomFieldsController(validClient);
  const invalidCustomFieldsController = new CustomFieldsController(
    invalidClient
  );

  beforeAll(async () => {
    await removeCustomerCustomList();
    await removeSubscriptionsCustomList();
  });

  describe('Create Metafields', () => {
    test('should create a single meta fields with input_type=text', async () => {
      const payload = {
        metafields: { ...textData },
      };
      const {
        result: [{ name, inputType }],
        statusCode,
      } = await customFieldsController.createMetafields(
        ResourceType.Subscriptions,
        payload
      );
      expect(statusCode).toBe(200);
      expect(name).toEqual(payload.metafields.name);
      expect(inputType).toBe(payload.metafields.inputType);
    });

    test('should create a multiple meta fields with two input_type=text', async () => {
      const payload = {
        metafields: [
          {
            name: 'secondTextName',
            inputType: MetafieldInput.Text,
          },
          {
            name: 'thirdTextName',
            inputType: MetafieldInput.Text,
          },
        ],
      };
      const { result, statusCode } =
        await customFieldsController.createMetafields(
          ResourceType.Subscriptions,
          payload
        );
      expect(statusCode).toBe(200);
      expect(result.length >= 2).toBeTruthy();
    });

    describe('Create single enum values', () => {
      test('should create a single meta fields with input_type=dropdown', async () => {
        const payload = {
          metafields: { ...dropdownData },
        };
        const {
          result: [{ name, inputType, mEnum }],
          statusCode,
        } = await customFieldsController.createMetafields(
          ResourceType.Subscriptions,
          payload
        );
        expect(statusCode).toBe(200);
        expect(name).toEqual(payload.metafields.name);
        expect(inputType).toBe(payload.metafields.inputType);
        expect(mEnum).toHaveLength(payload.metafields.mEnum.length);
        payload.metafields.mEnum.map((value) =>
          expect(mEnum?.includes(value)).toBeTruthy()
        );
      });

      test('should create a single meta fields with input_type=radio', async () => {
        const payload = {
          metafields: { ...radioData },
        };
        const {
          result: [{ name, inputType, mEnum }],
          statusCode,
        } = await customFieldsController.createMetafields(
          ResourceType.Subscriptions,
          payload
        );
        expect(statusCode).toBe(200);
        expect(name).toEqual(payload.metafields.name);
        expect(inputType).toBe(payload.metafields.inputType);
        expect(mEnum).toHaveLength(payload.metafields.mEnum.length);
        payload.metafields.mEnum.map((value) =>
          expect(mEnum?.includes(value)).toBeTruthy()
        );
      });
    });

    test('should create a multiple meta fields with enum values and input_type=dropdown', async () => {
      const payload = {
        metafields: [
          {
            ...dropdownData,
            name: 'secondDropDownName',
          },
          {
            ...dropdownData,
            name: 'thirdDropDownName',
          },
        ],
      };
      const { result, statusCode } =
        await customFieldsController.createMetafields(
          ResourceType.Subscriptions,
          payload
        );
      expect(statusCode).toBe(200);
      expect(result.length >= 2).toBeTruthy();
    });

    describe('Create meta fields with different scopes', () => {
      test('should create a meta fields without scope and input_type=text', async () => {
        const payload = {
          metafields: { ...textData },
        };
        const {
          result: [{ name, inputType, scope }],
          statusCode,
        } = await customFieldsController.createMetafields(
          ResourceType.Subscriptions,
          payload
        );
        expect(statusCode).toBe(200);
        expect(name).toEqual(payload.metafields.name);
        expect(inputType).toBe(payload.metafields.inputType);
        expect(scope?.csv).toBe(IncludeOption.Exclude);
        expect(scope?.invoices).toBe(IncludeOption.Exclude);
        expect(scope?.statements).toBe(IncludeOption.Exclude);
        expect(scope?.portal).toBe(IncludeOption.Exclude);
        expect(scope?.publicShow).toBe(IncludeOption.Exclude);
        expect(scope?.publicEdit).toBe(IncludeOption.Exclude);
        expect(scope?.hosted).toHaveLength(0);
      });

      test('should create a meta fields with include scope and input_type=text', async () => {
        const payload = {
          metafields: {
            scope: includeScope,
            ...textData,
          },
        };
        const {
          result: [{ name, inputType, scope }],
          statusCode,
        } = await customFieldsController.createMetafields(
          ResourceType.Subscriptions,
          payload
        );
        expect(statusCode).toBe(200);
        expect(name).toEqual(payload.metafields.name);
        expect(inputType).toBe(payload.metafields.inputType);
        expect(scope?.publicEdit).toBe(payload.metafields.scope.publicEdit);
        expect(scope?.publicShow).toBe(payload.metafields.scope.publicShow);
        expect(scope?.csv).toBe(payload.metafields.scope.csv);
        expect(scope?.invoices).toBe(payload.metafields.scope.invoices);
        expect(scope?.statements).toBe(payload.metafields.scope.statements);
        expect(scope?.portal).toBe(payload.metafields.scope.portal);
        expect(scope?.hosted).toHaveLength(0);
      });

      test('should create a meta fields with exclude scope and input_type=text', async () => {
        const payload = {
          metafields: {
            scope: { ...excludeScope },
            ...textData,
          },
        };
        const {
          result: [{ name, inputType, scope }],
          statusCode,
        } = await customFieldsController.createMetafields(
          ResourceType.Subscriptions,
          payload
        );
        expect(statusCode).toBe(200);
        expect(name).toEqual(payload.metafields.name);
        expect(inputType).toBe(payload.metafields.inputType);
        expect(scope?.publicEdit).toBe(payload.metafields.scope.publicEdit);
        expect(scope?.publicShow).toBe(payload.metafields.scope.publicShow);
        expect(scope?.csv).toBe(payload.metafields.scope.csv);
        expect(scope?.invoices).toBe(payload.metafields.scope.invoices);
        expect(scope?.statements).toBe(payload.metafields.scope.statements);
        expect(scope?.portal).toBe(payload.metafields.scope.portal);
        expect(scope?.hosted).toHaveLength(0);
      });

      test('should create a meta fields with switched scope exclude and input_type=text', async () => {
        const payload = {
          metafields: {
            scope: { ...switchedScope },
            ...textData,
          },
        };
        const {
          result: [{ name, inputType, scope }],
          statusCode,
        } = await customFieldsController.createMetafields(
          ResourceType.Subscriptions,
          payload
        );
        expect(statusCode).toBe(200);
        expect(name).toEqual(payload.metafields.name);
        expect(inputType).toBe(payload.metafields.inputType);
        expect(scope?.publicEdit).toBe(payload.metafields.scope.publicEdit);
        expect(scope?.publicShow).toBe(payload.metafields.scope.publicShow);
        expect(scope?.csv).toBe(payload.metafields.scope.csv);
        expect(scope?.invoices).toBe(payload.metafields.scope.invoices);
        expect(scope?.statements).toBe(payload.metafields.scope.statements);
        expect(scope?.portal).toBe(payload.metafields.scope.portal);
        expect(scope?.hosted).toHaveLength(0);
      });
    });

    test('should thrown an error when create a single meta fields with empty meta fields', async () => {
      const payload = { metafields: {} };
      const promise = customFieldsController.createMetafields(
        ResourceType.Subscriptions,
        payload
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
      });
    });

    test('should thrown an error when create a single meta fields with invalid client', async () => {
      const payload = {
        metafields: { ...textData },
      };
      const promise = invalidCustomFieldsController.createMetafields(
        ResourceType.Subscriptions,
        payload
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('List Metafields', () => {
    let textSubscriptionField: Metafield;
    const customFieldsCreated = [];
    const defaultCurrentPage = 1;
    const defaultPerPage = 20;

    beforeAll(async () => {
      textSubscriptionField = await createTextSubscriptionField();
      const dropDownSubscriptionField = await createDropdownSubscriptionField();
      const radioSubscriptionField = await createRadioSubscriptionField();
      customFieldsCreated.push(textSubscriptionField);
      customFieldsCreated.push(dropDownSubscriptionField);
      customFieldsCreated.push(radioSubscriptionField);
    });

    test('should list a meta fields with default data', async () => {
      const data = { resourceType: ResourceType.Subscriptions };
      const {
        result: { currentPage, perPage, metafields, totalCount },
        statusCode,
      } = await customFieldsController.listMetafields(data);
      expect(statusCode).toBe(200);
      expect(currentPage).toBe(defaultCurrentPage);
      expect(perPage).toBe(defaultPerPage);
      expect(
        metafields && metafields.length >= customFieldsCreated.length
      ).toBeTruthy();
      expect(
        totalCount && totalCount >= customFieldsCreated.length
      ).toBeTruthy();
    });

    describe('filter Metafields', () => {
      test('should list meta fields by name filter with successful match', async () => {
        await createTextSubscriptionField('text-field-for-filter');
        const data = {
          resourceType: ResourceType.Subscriptions,
          name: 'text-field-for-filter',
        };
        const { result, statusCode } =
          await customFieldsController.listMetafields(data);
        const { currentPage, perPage, metafields, totalCount } = result;
        expect(statusCode).toBe(200);
        expect(currentPage).toBe(defaultCurrentPage);
        expect(perPage).toBe(defaultPerPage);
        expect(metafields).toHaveLength(1);
        expect(metafields).toHaveLength(1);
        expect(totalCount).toBe(1);
        const { name, inputType } = (metafields || [])[0];
        expect(name).toEqual(data.name);
        expect(inputType).toEqual(textSubscriptionField.inputType);
      });

      test('should list meta fields by name filter with does not match', async () => {
        const data = {
          resourceType: ResourceType.Subscriptions,
          name: 'unknowName',
        };
        const {
          result: { currentPage, perPage, metafields, totalCount },
          statusCode,
        } = await customFieldsController.listMetafields(data);
        expect(statusCode).toBe(200);
        expect(currentPage).toBe(defaultCurrentPage);
        expect(perPage).toBe(defaultPerPage);
        expect(totalCount).toBe(0);
        expect(metafields).toHaveLength(0);
      });
    });

    describe('filter Metafields', () => {
      test('should list a meta fields with specific page and data per page', async () => {
        const SECOND_PAGE = 2;
        const THIRTY_PER_PAGE = 30;
        const data = {
          resourceType: ResourceType.Subscriptions,
          page: SECOND_PAGE,
          perPage: THIRTY_PER_PAGE,
        };
        const {
          result: { currentPage, perPage },
          statusCode,
        } = await customFieldsController.listMetafields(data);
        expect(statusCode).toBe(200);
        expect(currentPage).toBe(SECOND_PAGE);
        expect(perPage).toBe(THIRTY_PER_PAGE);
      });

      test('should list a meta fields with specific page and data per page and validate metadata', async () => {
        const FIRST_PAGE = 1;
        const SECOND_PER_PAGE = 2;
        const data = {
          resourceType: ResourceType.Subscriptions,
          page: FIRST_PAGE,
          perPage: SECOND_PER_PAGE,
        };
        const {
          result: { currentPage, perPage, metafields },
          statusCode,
        } = await customFieldsController.listMetafields(data);
        expect(statusCode).toBe(200);
        expect(currentPage).toBe(FIRST_PAGE);
        expect(perPage).toBe(SECOND_PER_PAGE);
        expect(metafields).toHaveLength(SECOND_PER_PAGE);
      });
    });

    test('should list a meta fields with specific direction as desc', async () => {
      let minorId = 999999;
      const FIRST_PAGE = 1;
      const THIRD_PER_PAGE = 3;
      const queryData = {
        resourceType: ResourceType.Subscriptions,
        page: FIRST_PAGE,
        perPage: THIRD_PER_PAGE,
        direction: SortingDirection.Desc,
      };
      const {
        result: { currentPage, perPage, metafields },
        statusCode,
      } = await customFieldsController.listMetafields(queryData);
      expect(statusCode).toBe(200);
      expect(currentPage).toBe(FIRST_PAGE);
      expect(perPage).toBe(THIRD_PER_PAGE);
      const fieldsID = (metafields || []).map((field) => field.id);
      fieldsID.forEach((id = minorId) => {
        expect(id).toBeLessThan(minorId);
        minorId = id;
      });
    });

    test('should thrown an error when list meta fields with unauthorized data', async () => {
      const data = { resourceType: ResourceType.Subscriptions };
      const promise = invalidCustomFieldsController.listMetafields(data);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    describe('invalid page or per page parameters', () => {
      test('should thrown an error when list meta fields with invalid page', async () => {
        const errorMessage = 'invalid page: -1';
        const data = {
          resourceType: ResourceType.Subscriptions,
          page: -1,
        };
        const promise = customFieldsController.listMetafields(data);
        expect(promise).rejects.toThrow();
        await promise.catch((error) => {
          expect(error.statusCode).toBe(422);
          expect(error.result.errors[0]).toEqual(errorMessage);
        });
      });

      test('should use default per page value when user sends -1', async () => {
        const data = {
          resourceType: ResourceType.Subscriptions,
          perPage: -1,
        };
        const response = await customFieldsController.listMetafields(data);
        expect(response.result.perPage).toBe(20);
      });
    });
  });

  describe('Update custom fields', () => {
    test('should update the field name', async () => {
      const customTextField = await createTextSubscriptionField();
      const nameToUpdate = 'updatedName';
      const payloadToUpdate = {
        metafields: {
          currentName: customTextField.name,
          name: nameToUpdate,
        },
      };
      const {
        result: [{ name }],
        statusCode,
      } = await customFieldsController.updateMetafield(
        ResourceType.Subscriptions,
        payloadToUpdate
      );
      expect(statusCode).toBe(200);
      expect(name).toEqual(nameToUpdate);
    });

    test('should update the field name and scope', async () => {
      const customTextField = await createTextSubscriptionField();
      const nameToUpdate = 'updatedName2';
      const payloadToUpdate = {
        metafields: {
          scope: includeScope,
          currentName: customTextField.name,
          name: nameToUpdate,
        },
      };
      const {
        result: [{ name, scope }],
        statusCode,
      } = await customFieldsController.updateMetafield(
        ResourceType.Subscriptions,
        payloadToUpdate
      );
      expect(statusCode).toBe(200);
      expect(name).toEqual(nameToUpdate);
      expect(scope?.csv).toEqual(IncludeOption.Include);
      expect(scope?.invoices).toEqual(IncludeOption.Include);
      expect(scope?.statements).toEqual(IncludeOption.Include);
      expect(scope?.portal).toEqual(IncludeOption.Include);
      expect(scope?.publicEdit).toEqual(IncludeOption.Include);
      expect(scope?.publicShow).toEqual(IncludeOption.Include);
    });

    test('should update the field name and enum', async () => {
      const customDropDownField = await createDropdownSubscriptionField();
      const nameToUpdate = 'updatedDropdownName';
      const enumToUpdate = [
        ...(customDropDownField.mEnum || []),
        'otherOption',
      ];
      const payloadToUpdate = {
        metafields: {
          mEnum: enumToUpdate,
          currentName: customDropDownField.name,
          name: nameToUpdate,
        },
      };
      const {
        result: [{ id, name, mEnum }],
        statusCode,
      } = await customFieldsController.updateMetafield(
        ResourceType.Subscriptions,
        payloadToUpdate
      );
      expect(statusCode).toBe(200);
      expect(id).toBe(customDropDownField.id);
      expect(name).toEqual(nameToUpdate);
      expect(mEnum).toHaveLength(enumToUpdate.length);
      enumToUpdate.map((value) => expect(mEnum?.includes(value)).toBeTruthy());
    });

    describe('Update custom fields input_type text to enum', () => {
      test('should update text field to dropdown', async () => {
        const customTextField = await createTextSubscriptionField();
        const nameToUpdate = 'updatedTextToDropDown';
        const payloadToUpdate = {
          metafields: {
            ...dropdownData,
            currentName: customTextField.name,
            name: nameToUpdate,
          },
        };
        expect(customTextField.inputType).toEqual(MetafieldInput.Text);
        const {
          result: [{ id, name, inputType, mEnum }],
          statusCode,
        } = await customFieldsController.updateMetafield(
          ResourceType.Subscriptions,
          payloadToUpdate
        );
        expect(statusCode).toBe(200);
        expect(id).toBe(customTextField.id);
        expect(name).toEqual(nameToUpdate);
        expect(inputType).toEqual(MetafieldInput.Dropdown);
        expect(mEnum).toHaveLength(defaultEnum.length);
        defaultEnum.map((value) => expect(mEnum?.includes(value)).toBeTruthy());
      });

      test('should update text field to radio', async () => {
        const customTextField = await createTextSubscriptionField();
        const nameToUpdate = 'updatedTextToRadio';
        const payloadToUpdate = {
          metafields: {
            ...radioData,
            currentName: customTextField.name,
            name: nameToUpdate,
          },
        };
        expect(customTextField.inputType).toEqual(MetafieldInput.Text);
        const {
          result: [{ id, name, inputType, mEnum }],
          statusCode,
        } = await customFieldsController.updateMetafield(
          ResourceType.Subscriptions,
          payloadToUpdate
        );
        expect(statusCode).toBe(200);
        expect(id).toBe(customTextField.id);
        expect(name).toEqual(nameToUpdate);
        expect(inputType).toEqual(MetafieldInput.Radio);
        expect(mEnum).toHaveLength(defaultEnum.length);
        defaultEnum.map((value) => expect(mEnum?.includes(value)).toBeTruthy());
      });
    });

    describe('Update custom fields input_type enum to text', () => {
      test('should update dropdown field to text', async () => {
        const customDropDownField = await createDropdownSubscriptionField();
        const nameToUpdate = 'updateDropdownToTextName';
        const payloadToUpdate = {
          metafields: {
            ...textData,
            currentName: customDropDownField.name,
            name: nameToUpdate,
            mEnum: [],
          },
        };
        expect(customDropDownField.inputType).toEqual(MetafieldInput.Dropdown);
        const {
          result: [{ id, name, inputType, mEnum }],
          statusCode,
        } = await customFieldsController.updateMetafield(
          ResourceType.Subscriptions,
          payloadToUpdate
        );
        expect(statusCode).toBe(200);
        expect(id).toEqual(customDropDownField.id);
        expect(name).toEqual(nameToUpdate);
        expect(inputType).toEqual(MetafieldInput.Text);
        expect(mEnum).toHaveLength(0);
      });

      test('should update radio field to text', async () => {
        const customRadioField = await createRadioSubscriptionField();
        const nameToUpdate = 'updateRadioToText';
        const payloadToUpdate = {
          metafields: {
            ...textData,
            currentName: customRadioField.name,
            name: nameToUpdate,
            mEnum: [],
          },
        };
        expect(customRadioField.inputType).toEqual(MetafieldInput.Radio);
        const {
          result: [{ id, name, inputType, mEnum }],
          statusCode,
        } = await customFieldsController.updateMetafield(
          ResourceType.Subscriptions,
          payloadToUpdate
        );
        expect(statusCode).toBe(200);
        expect(id).toEqual(customRadioField.id);
        expect(name).toEqual(nameToUpdate);
        expect(inputType).toEqual(MetafieldInput.Text);
        expect(mEnum).toHaveLength(0);
      });
    });

    test('should thrown an error when update meta fields with unauthorized data', async () => {
      const nameToUpdate = 'updatedUnauthorizedText';
      const currentNameCR = 'unauthorizedName';
      const payloadToUpdate = {
        metafields: {
          currentName: currentNameCR,
          name: nameToUpdate,
        },
      };
      const promise = invalidCustomFieldsController.updateMetafield(
        ResourceType.Subscriptions,
        payloadToUpdate
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should thrown an error when update meta fields with missing current name', async () => {
      const payloadToUpdate = {
        metafields: {},
      };
      const promise = customFieldsController.updateMetafield(
        ResourceType.Subscriptions,
        payloadToUpdate
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
      });
    });

    test('should not throw an error when update meta fields with empty enum', async () => {
      const customTextField = await createTextSubscriptionField();
      const nameToUpdate = 'updatedTextName';
      const payloadToUpdate = {
        metafields: {
          inputType: MetafieldInput.Radio,
          currentName: customTextField.name,
          name: nameToUpdate,
          mEnum: ['', ''],
        },
      };
      const promise = await customFieldsController.updateMetafield(
        ResourceType.Subscriptions,
        payloadToUpdate
      );
      expect(promise.statusCode).toBe(200);
    });
  });

  describe('Delete custom fields', () => {
    test('should delete created customer text field', async () => {
      const customTextField = await createTextCustomersField();
      const deletedResponse = await customFieldsController.deleteMetafield(
        ResourceType.Customers,
        customTextField.name
      );
      expect(deletedResponse.statusCode).toBe(200);
      const data = {
        resourceType: ResourceType.Customers,
        name: customTextField.name,
      };
      const {
        result: { metafields, totalCount },
        statusCode,
      } = await customFieldsController.listMetafields(data);
      expect(statusCode).toBe(200);
      expect(metafields?.length).toBe(0);
      expect(totalCount).toBe(0);
    });

    test('should delete created customer text field attached to metadata and remove customer field created', async () => {
      const validCustomer = await createCustomer();
      const customTextField = await createTextCustomersField(
        'delete-customer-text-field'
      );
      const customerID = validCustomer.id || 0;
      const metaDatapayload = {
        metadata: [
          {
            name: 'Color',
            value: 'Blue',
          },
        ],
      };
      const createMetaDataResponse =
        await customFieldsController.createMetadata(
          ResourceType.Customers,
          customerID,
          metaDatapayload
        );
      expect(createMetaDataResponse.statusCode).toBe(200);
      const metadataCreatedID = createMetaDataResponse.result[0].id;
      const deletedResponse = await customFieldsController.deleteMetafield(
        ResourceType.Customers,
        customTextField.name
      );
      expect(deletedResponse?.statusCode).toBe(200);
      const data = {
        resourceType: ResourceType.Customers,
        name: customTextField.name,
      };
      const { result, statusCode } =
        await customFieldsController.listMetafields(data);
      expect(statusCode).toBe(200);
      expect(result.metafields?.length).toBe(0);
      expect(result.totalCount).toBe(0);
      const metadataListResponse = await customFieldsController.listMetadata({
        resourceType: ResourceType.Customers,
        resourceId: customerID,
      });
      expect(metadataListResponse.statusCode).toBe(200);
      const metadataFound = metadataListResponse.result.metadata?.find(
        (data) => data.id == metadataCreatedID
      );
      expect(metadataFound?.metafieldId).not.toBe(customTextField.id);
    });

    test('should thrown an error when delete meta fields with unauthorized data', async () => {
      const promise = invalidCustomFieldsController.deleteMetafield(
        ResourceType.Customers,
        ''
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should thrown an error when delete meta fields without name', async () => {
      const promise = customFieldsController.deleteMetafield(
        ResourceType.Customers
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });
});
