
# Invoice Payment Method Type

The type of payment method used. Defaults to other.

## Enumeration

`InvoicePaymentMethodType`

## Fields

| Name |
|  --- |
| `CreditCard` |
| `Check` |
| `Cash` |
| `MoneyOrder` |
| `Ach` |
| `Other` |

## Example

```ts
import { InvoicePaymentMethodType } from '@maxio-com/advanced-billing-sdk';

const invoicePaymentMethodType = InvoicePaymentMethodType.Cash;
```

