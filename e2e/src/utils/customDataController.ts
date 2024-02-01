import { createClient } from '../config';
import {
  CustomFieldsController,
  ResourceType,
  Metadata,
} from 'advanced-billing-sdk';

const validClient = createClient();
const customFieldsController = new CustomFieldsController(validClient);

async function deleteCustomMetadata(
  { resourceId = 0, name = '' }: Metadata,
  resourceType: ResourceType
) {
  await customFieldsController.deleteMetadata(resourceType, resourceId, name);
}

async function deleteAllCustomData(
  customMetadataList: Metadata[] = [],
  resourceType: ResourceType
) {
  const removeMetada = async (customData: Metadata = {}) =>
    await deleteCustomMetadata(customData, resourceType);
  Promise.all(customMetadataList.map(removeMetada));
}

async function createMetadata(
  resourceType: ResourceType,
  resourceId: number,
  fieldName = '',
  fieldValue = ''
) {
  const customMetadata = {
    name: fieldName,
    value: fieldValue,
  };
  const payload = {
    metadata: [customMetadata],
  };
  const {
    result: [createdData],
  } = await customFieldsController.createMetadata(
    resourceType,
    resourceId,
    payload
  );
  return createdData;
}

export function getPayloadByDefault() {
  return {
    metadata: [
      {
        name: 'Color',
        value: 'Blue',
      },
    ],
  };
}

export async function removeCustomerMetadataList() {
  const resourceType = ResourceType.Customers;
  const {
    result: { metadata },
  } = await customFieldsController.listMetadataForResourceType({
    resourceType,
  });
  await deleteAllCustomData(metadata, resourceType);
}

export async function removeSubscriptionsMetadataList() {
  const resourceType = ResourceType.Subscriptions;
  const {
    result: { metadata },
  } = await customFieldsController.listMetadataForResourceType({
    resourceType,
  });
  await deleteAllCustomData(metadata, resourceType);
}

export async function createCustomerTextMetadata(
  resourceId: number,
  fieldName = ''
) {
  return await createMetadata(
    ResourceType.Customers,
    resourceId,
    fieldName,
    'SomeValue'
  );
}

export async function createCustomerDropdownMetadata(
  resourceId: number,
  fieldName = '',
  fieldValue: string
) {
  return await createMetadata(
    ResourceType.Customers,
    resourceId,
    fieldName,
    fieldValue
  );
}

export async function createSubscriptionTextMetadata(
  resourceId: number,
  fieldName = ''
) {
  return await createMetadata(
    ResourceType.Subscriptions,
    resourceId,
    fieldName,
    'SomeValue'
  );
}

export async function createSubscriptionDropdownMetadata(
  resourceId: number,
  fieldName = '',
  fieldValue: string
) {
  return await createMetadata(
    ResourceType.Subscriptions,
    resourceId,
    fieldName,
    fieldValue
  );
}

export function getMetadataIdList(metadataList: Metadata[] = []) {
  return metadataList.map(({ id }: Metadata) => id);
}
