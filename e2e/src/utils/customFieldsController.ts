import { CONFIG, createClient } from '../config';
import {
  CustomersController,
  CustomFieldsController,
  Environment,
  ResourceType,
  Metafield,
  MetafieldInput,
  IncludeOption,
} from 'advanced-billing-sdk';

const validClient = createClient();
const customFieldsController = new CustomFieldsController(validClient);

async function deleteCustomField(resourceType: ResourceType, name: string) {
  await customFieldsController.deleteMetafield(resourceType, name);
}

async function deleteCustomFields(
  customFieldList: Metafield[] = [],
  resourceType: ResourceType
) {
  Promise.all(
    customFieldList.map(
      async (customField = {}) =>
        await deleteCustomField(resourceType, customField.name || '')
    )
  );
}

export const defaultEnum = ['firstOption', 'secondOption'];

export const defaultHost = ['0.0.0.0', '127.0.0.1'];

export const textData = {
  name: 'customTextName',
  inputType: MetafieldInput.Text,
};

export const dropdownData = {
  name: 'customDropDownName',
  inputType: MetafieldInput.Dropdown,
  mEnum: [...defaultEnum],
};

export const radioData = {
  name: 'customRadioName',
  inputType: MetafieldInput.Radio,
  mEnum: [...defaultEnum],
};

export const includeScope = {
  csv: IncludeOption.Include,
  invoices: IncludeOption.Include,
  statements: IncludeOption.Include,
  portal: IncludeOption.Include,
  publicEdit: IncludeOption.Include,
  publicShow: IncludeOption.Include,
};

export const excludeScope = {
  csv: IncludeOption.Exclude,
  invoices: IncludeOption.Exclude,
  statements: IncludeOption.Exclude,
  portal: IncludeOption.Exclude,
  publicEdit: IncludeOption.Exclude,
  publicShow: IncludeOption.Exclude,
};

export const switchedScope = {
  csv: IncludeOption.Include,
  invoices: IncludeOption.Exclude,
  statements: IncludeOption.Include,
  portal: IncludeOption.Exclude,
  publicEdit: IncludeOption.Include,
  publicShow: IncludeOption.Exclude,
};

export function createInvalidClient() {
  return createClient({
    timeout: 0,
    domain: CONFIG.DOMAIN,
    environment: Environment.Production,
    subdomain: CONFIG.SUBDOMAIN,
    basicAuthUserName: 'invalidKey',
    basicAuthPassword: CONFIG.PASSWORD,
  });
}

export async function removeCustomerCustomList() {
  const {
    result: { metafields },
  } = await customFieldsController.listMetafields({
    resourceType: ResourceType.Customers,
  });
  await deleteCustomFields(metafields, ResourceType.Customers);
}

export async function removeSubscriptionsCustomList() {
  const {
    result: { metafields },
  } = await customFieldsController.listMetafields({
    resourceType: ResourceType.Subscriptions,
  });
  await deleteCustomFields(metafields, ResourceType.Subscriptions);
}

export async function createTextCustomersField() {
  const {
    result: [createdTextField],
  } = await customFieldsController.createMetafields(ResourceType.Customers, {
    metafields: { ...textData },
  });
  return createdTextField;
}

export async function createTextSubscriptionField() {
  const {
    result: [createdTextField],
  } = await customFieldsController.createMetafields(
    ResourceType.Subscriptions,
    {
      metafields: { ...textData },
    }
  );
  return createdTextField;
}

export async function createDropdownSubscriptionField() {
  const {
    result: [createdDropDownField],
  } = await customFieldsController.createMetafields(
    ResourceType.Subscriptions,
    {
      metafields: { ...dropdownData },
    }
  );
  return createdDropDownField;
}

export async function createRadioSubscriptionField() {
  const {
    result: [createdRadioField],
  } = await customFieldsController.createMetafields(
    ResourceType.Subscriptions,
    {
      metafields: { ...radioData },
    }
  );
  return createdRadioField;
}

export async function createCustomer() {
  const validClient = createClient();
  const customersController = new CustomersController(validClient);
  const {
    result: { customer },
  } = await customersController.createCustomer({
    customer: {
      firstName: 'Martha',
      lastName: 'Washington',
      email: 'martha@example.com',
      ccEmails: 'george@example.com',
    },
  });
  return customer;
}
