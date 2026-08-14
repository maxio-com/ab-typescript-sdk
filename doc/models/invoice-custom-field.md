
# Invoice Custom Field

## Structure

`InvoiceCustomField`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ownerId` | `number \| undefined` | Optional | - |
| `ownerType` | [`CustomFieldOwner \| undefined`](../../doc/models/custom-field-owner.md) | Optional | - |
| `name` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `value` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `metadatumId` | `number \| undefined` | Optional | - |

## Example

```ts
import {
  CustomFieldOwner,
  InvoiceCustomField,
} from '@maxio-com/advanced-billing-sdk';

const invoiceCustomField: InvoiceCustomField = {
  ownerId: 14,
  ownerType: CustomFieldOwner.Customer,
  name: 'name0',
  value: 'value2',
  metadatumId: 14,
};
```

