
# Failed Payment Event Data

Example schema for an `failed_payment` event

## Structure

`FailedPaymentEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountInCents` | `number` | Required | The monetary value of the payment, expressed in cents. |
| `appliedAmount` | `number` | Required | The monetary value of the payment, expressed in dollars. |
| `memo` | `string \| null \| undefined` | Optional | The memo passed when the payment was created. |
| `paymentMethod` | [`InvoicePaymentMethodType`](../../doc/models/invoice-payment-method-type.md) | Required | - |
| `transactionId` | `number` | Required | The transaction ID of the failed payment. |

## Example

```ts
import {
  FailedPaymentEventData,
  InvoicePaymentMethodType,
} from '@maxio-com/advanced-billing-sdk';

const failedPaymentEventData: FailedPaymentEventData = {
  amountInCents: 34,
  appliedAmount: 196,
  paymentMethod: InvoicePaymentMethodType.Ach,
  transactionId: 76,
  memo: 'memo0',
};
```

