
# Customer Changes Preview Response

## Structure

`CustomerChangesPreviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `changes` | [`CustomerChange`](../../doc/models/customer-change.md) | Required | - |

## Example

```ts
import {
  CustomFieldOwner,
  CustomerChangesPreviewResponse,
} from '@maxio-com/advanced-billing-sdk';

const customerChangesPreviewResponse: CustomerChangesPreviewResponse = {
  changes: {
    payer: {
      before: {
        firstName: 'first_name0',
        lastName: 'last_name8',
        organization: 'organization4',
        email: 'email6',
      },
      after: {
        firstName: 'first_name2',
        lastName: 'last_name0',
        organization: 'organization4',
        email: 'email4',
      },
    },
    shippingAddress: {
      before: {
        street: 'street0',
        line2: 'line24',
        city: 'city0',
        state: 'state6',
        zip: 'zip4',
      },
      after: {
        street: 'street2',
        line2: 'line26',
        city: 'city8',
        state: 'state2',
        zip: 'zip4',
      },
    },
    billingAddress: {
      before: {
        street: 'street0',
        line2: 'line24',
        city: 'city0',
        state: 'state6',
        zip: 'zip4',
      },
      after: {
        street: 'street2',
        line2: 'line26',
        city: 'city8',
        state: 'state2',
        zip: 'zip4',
      },
    },
    customFields: {
      before: [
        {
          ownerId: 26,
          ownerType: CustomFieldOwner.Customer,
          name: 'name0',
          value: 'value2',
          metadatumId: 26,
        },
        {
          ownerId: 26,
          ownerType: CustomFieldOwner.Customer,
          name: 'name0',
          value: 'value2',
          metadatumId: 26,
        }
      ],
      after: [
        {
          ownerId: 130,
          ownerType: CustomFieldOwner.Customer,
          name: 'name2',
          value: 'value4',
          metadatumId: 130,
        },
        {
          ownerId: 130,
          ownerType: CustomFieldOwner.Customer,
          name: 'name2',
          value: 'value4',
          metadatumId: 130,
        },
        {
          ownerId: 130,
          ownerType: CustomFieldOwner.Customer,
          name: 'name2',
          value: 'value4',
          metadatumId: 130,
        }
      ],
    },
  },
};
```

