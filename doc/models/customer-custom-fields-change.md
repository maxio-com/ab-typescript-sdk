
# Customer Custom Fields Change

## Structure

`CustomerCustomFieldsChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `before` | [`InvoiceCustomField[]`](../../doc/models/invoice-custom-field.md) | Required | - |
| `after` | [`InvoiceCustomField[]`](../../doc/models/invoice-custom-field.md) | Required | - |

## Example

```ts
import {
  CustomFieldOwner,
  CustomerCustomFieldsChange,
} from '@maxio-com/advanced-billing-sdk';

const customerCustomFieldsChange: CustomerCustomFieldsChange = {
  before: [
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
    }
  ],
};
```

