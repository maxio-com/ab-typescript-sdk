
# Invoice Payment Application

## Structure

`InvoicePaymentApplication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceUid` | `string \| undefined` | Optional | Unique identifier for the paid invoice. It has the prefix "inv_" followed by alphanumeric characters. |
| `applicationUid` | `string \| undefined` | Optional | Unique identifier for the payment. It has the prefix "pmt_" followed by alphanumeric characters. |
| `appliedAmount` | `string \| undefined` | Optional | Dollar amount of the paid invoice. |

## Example

```ts
import { InvoicePaymentApplication } from '@maxio-com/advanced-billing-sdk';

const invoicePaymentApplication: InvoicePaymentApplication = {
  invoiceUid: 'invoice_uid8',
  applicationUid: 'application_uid8',
  appliedAmount: 'applied_amount0',
};
```

