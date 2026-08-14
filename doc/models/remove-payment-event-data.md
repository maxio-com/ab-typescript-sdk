
# Remove Payment Event Data

Example schema for an `remove_payment` event

## Structure

`RemovePaymentEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `number` | Required | Transaction ID of the original payment that was removed |
| `memo` | `string` | Required | Memo of the original payment |
| `originalAmount` | `string \| undefined` | Optional | Full amount of the original payment |
| `appliedAmount` | `string` | Required | Applied amount of the original payment |
| `transactionTime` | `string` | Required | Transaction time of the original payment, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" |
| `paymentMethod` | [`InvoiceEventPayment`](../../doc/models/containers/invoice-event-payment.md) | Required | A nested data structure detailing the method of payment |
| `prepayment` | `boolean` | Required | The flag that shows whether the original payment was a prepayment or not |

## Example

```ts
import {
  InvoiceEventPaymentMethod,
  RemovePaymentEventData,
} from '@maxio-com/advanced-billing-sdk';

const removePaymentEventData: RemovePaymentEventData = {
  transactionId: 20,
  memo: 'memo4',
  appliedAmount: 'applied_amount8',
  transactionTime: '2016-03-13T12:52:32.123Z',
  paymentMethod: {
    type: InvoiceEventPaymentMethod.ApplePay,
  },
  prepayment: false,
  originalAmount: 'original_amount4',
};
```

