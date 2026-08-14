
# Invoice Payment Type

The type of payment to be applied to an Invoice. Defaults to external.

## Enumeration

`InvoicePaymentType`

## Fields

| Name |
|  --- |
| `External` |
| `Prepayment` |
| `ServiceCredit` |
| `Payment` |

## Example

```ts
import { InvoicePaymentType } from '@maxio-com/advanced-billing-sdk';

const invoicePaymentType = InvoicePaymentType.External;
```

