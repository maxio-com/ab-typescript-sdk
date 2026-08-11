
# Create Invoice Payment Application

## Structure

`CreateInvoicePaymentApplication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceUid` | `string` | Required | Unique identifier for the invoice. It has the prefix "inv_" followed by alphanumeric characters. |
| `amount` | `string` | Required | Dollar amount of the invoice payment (eg. "10.50" => $10.50). |

## Example

```ts
import {
  CreateInvoicePaymentApplication,
} from '@maxio-com/advanced-billing-sdk';

const createInvoicePaymentApplication: CreateInvoicePaymentApplication = {
  invoiceUid: 'invoice_uid6',
  amount: 'amount8',
};
```

