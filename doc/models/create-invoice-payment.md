
# Create Invoice Payment

## Structure

`CreateInvoicePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`CreateInvoicePaymentAmount \| undefined`](../../doc/models/containers/create-invoice-payment-amount.md) | Optional | This is a container for one-of cases. |
| `memo` | `string \| undefined` | Optional | A description to be attached to the payment. Applicable only to `external` payments. |
| `method` | [`InvoicePaymentMethodType \| undefined`](../../doc/models/invoice-payment-method-type.md) | Optional | The type of payment method used. Defaults to other. |
| `details` | `string \| undefined` | Optional | Additional information related to the payment method (eg. Check #). Applicable only to `external` payments. |
| `paymentProfileId` | `number \| undefined` | Optional | The ID of the payment profile to be used for the payment. |
| `receivedOn` | `string \| undefined` | Optional | Date reflecting when the payment was received from a customer. Must be in the past. Applicable only to<br>`external` payments. |

## Example

```ts
import {
  CreateInvoicePayment,
  InvoicePaymentMethodType,
} from '@maxio-com/advanced-billing-sdk';

const createInvoicePayment: CreateInvoicePayment = {
  amount: 'String7',
  memo: 'memo8',
  method: InvoicePaymentMethodType.Ach,
  details: 'details4',
  paymentProfileId: 30,
};
```

