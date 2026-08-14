
# Multi Invoice Payment

## Structure

`MultiInvoicePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `number \| undefined` | Optional | The numeric ID of the transaction. |
| `totalAmount` | `string \| undefined` | Optional | Dollar amount of the sum of the paid invoices. |
| `currencyCode` | `string \| undefined` | Optional | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `applications` | [`InvoicePaymentApplication[] \| undefined`](../../doc/models/invoice-payment-application.md) | Optional | - |

## Example

```ts
import { MultiInvoicePayment } from '@maxio-com/advanced-billing-sdk';

const multiInvoicePayment: MultiInvoicePayment = {
  transactionId: 246,
  totalAmount: 'total_amount0',
  currencyCode: 'currency_code0',
  applications: [
    {
      invoiceUid: 'invoice_uid8',
      applicationUid: 'application_uid8',
      appliedAmount: 'applied_amount0',
    },
    {
      invoiceUid: 'invoice_uid8',
      applicationUid: 'application_uid8',
      appliedAmount: 'applied_amount0',
    }
  ],
};
```

