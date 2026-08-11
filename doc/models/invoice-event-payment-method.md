
# Invoice Event Payment Method

## Enumeration

`InvoiceEventPaymentMethod`

## Fields

| Name |
|  --- |
| `ApplePay` |
| `BankAccount` |
| `CreditCard` |
| `External` |
| `PaypalAccount` |

## Example

```ts
import { InvoiceEventPaymentMethod } from '@maxio-com/advanced-billing-sdk';

const invoiceEventPaymentMethod = InvoiceEventPaymentMethod.CreditCard;
```

