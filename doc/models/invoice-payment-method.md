
# Invoice Payment Method

## Structure

`InvoicePaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `details` | `string \| undefined` | Optional | - |
| `kind` | `string \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `cardBrand` | `string \| undefined` | Optional | - |
| `cardExpiration` | `string \| undefined` | Optional | - |
| `lastFour` | `string \| null \| undefined` | Optional | - |
| `maskedCardNumber` | `string \| undefined` | Optional | - |

## Example

```ts
import { InvoicePaymentMethod } from '@maxio-com/advanced-billing-sdk';

const invoicePaymentMethod: InvoicePaymentMethod = {
  details: 'details2',
  kind: 'kind0',
  memo: 'memo6',
  type: 'type8',
  cardBrand: 'card_brand4',
};
```

