
# Invoice Balance Item

## Structure

`InvoiceBalanceItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `number` | `string \| undefined` | Optional | - |
| `outstandingAmount` | `string \| undefined` | Optional | - |

## Example

```ts
import { InvoiceBalanceItem } from '@maxio-com/advanced-billing-sdk';

const invoiceBalanceItem: InvoiceBalanceItem = {
  uid: 'uid8',
  number: 'number6',
  outstandingAmount: 'outstanding_amount6',
};
```

