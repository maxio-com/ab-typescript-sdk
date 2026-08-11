
# Create Multi Invoice Payment

## Structure

`CreateMultiInvoicePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `memo` | `string \| undefined` | Optional | A description to be attached to the payment. |
| `details` | `string \| undefined` | Optional | Additional information related to the payment method (eg. Check #). |
| `method` | [`InvoicePaymentMethodType \| undefined`](../../doc/models/invoice-payment-method-type.md) | Optional | The type of payment method used. Defaults to other. |
| `amount` | [`CreateMultiInvoicePaymentAmount`](../../doc/models/containers/create-multi-invoice-payment-amount.md) | Required | This is a container for one-of cases. |
| `receivedOn` | `string \| undefined` | Optional | Date reflecting when the payment was received from a customer. Must be in the past. |
| `applications` | [`CreateInvoicePaymentApplication[]`](../../doc/models/create-invoice-payment-application.md) | Required | - |

## Example

```ts
import {
  CreateMultiInvoicePayment,
  InvoicePaymentMethodType,
} from '@maxio-com/advanced-billing-sdk';

const createMultiInvoicePayment: CreateMultiInvoicePayment = {
  amount: 'String9',
  applications: [
    {
      invoiceUid: 'invoice_uid8',
      amount: 'amount0',
    }
  ],
  memo: 'memo0',
  details: 'details6',
  method: InvoicePaymentMethodType.Ach,
  receivedOn: 'received_on8',
};
```

