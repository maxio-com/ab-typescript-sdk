
# Invoice Refund

## Structure

`InvoiceRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `number \| undefined` | Optional | - |
| `paymentId` | `number \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `originalAmount` | `string \| undefined` | Optional | - |
| `appliedAmount` | `string \| undefined` | Optional | - |
| `gatewayTransactionId` | `string \| null \| undefined` | Optional | The transaction ID for the refund as returned from the payment gateway |
| `gatewayUsed` | `string \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |
| `achLateReject` | `boolean \| null \| undefined` | Optional | - |

## Example

```ts
import { InvoiceRefund } from '@maxio-com/advanced-billing-sdk';

const invoiceRefund: InvoiceRefund = {
  transactionId: 166,
  paymentId: 36,
  memo: 'memo6',
  originalAmount: 'original_amount6',
  appliedAmount: 'applied_amount6',
};
```

