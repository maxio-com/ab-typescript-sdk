
# Apply Payment Event Data

Example schema for an `apply_payment` event

## Structure

`ApplyPaymentEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consolidationLevel` | [`InvoiceConsolidationLevel`](../../doc/models/invoice-consolidation-level.md) | Required | - |
| `memo` | `string` | Required | The payment memo |
| `originalAmount` | `string` | Required | The full, original amount of the payment transaction as a string in full units. Incoming payments can be split amongst several invoices, which will result in a `applied_amount` less than the `original_amount`. Example: A $100.99 payment, of which $40.11 is applied to this invoice, will have an `original_amount` of `"100.99"`. |
| `appliedAmount` | `string` | Required | The amount of the payment applied to this invoice. Incoming payments can be split amongst several invoices, which will result in a `applied_amount` less than the `original_amount`. Example: A $100.99 payment, of which $40.11 is applied to this invoice, will have an `applied_amount` of `"40.11"`. |
| `transactionTime` | `string` | Required | The time the payment was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" |
| `paymentMethod` | [`InvoiceEventPayment`](../../doc/models/containers/invoice-event-payment.md) | Required | A nested data structure detailing the method of payment |
| `transactionId` | `number \| undefined` | Optional | The Chargify id of the original payment |
| `parentInvoiceNumber` | `number \| null \| undefined` | Optional | - |
| `remainingPrepaymentAmount` | `string \| null \| undefined` | Optional | - |
| `prepayment` | `boolean \| undefined` | Optional | - |
| `external` | `boolean \| undefined` | Optional | - |

## Example

```ts
import {
  ApplyPaymentEventData,
  InvoiceConsolidationLevel,
  InvoiceEventPaymentMethod,
} from '@maxio-com/advanced-billing-sdk';

const applyPaymentEventData: ApplyPaymentEventData = {
  consolidationLevel: InvoiceConsolidationLevel.Child,
  memo: 'memo0',
  originalAmount: 'original_amount0',
  appliedAmount: 'applied_amount2',
  transactionTime: '2016-03-13T12:52:32.123Z',
  paymentMethod: {
    type: InvoiceEventPaymentMethod.ApplePay,
  },
  transactionId: 142,
  parentInvoiceNumber: 228,
  remainingPrepaymentAmount: 'remaining_prepayment_amount4',
  prepayment: false,
  external: false,
};
```

