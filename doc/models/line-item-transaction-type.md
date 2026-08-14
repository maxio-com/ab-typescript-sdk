
# Line Item Transaction Type

A handle for the line item transaction type

## Enumeration

`LineItemTransactionType`

## Fields

| Name |
|  --- |
| `Charge` |
| `Credit` |
| `Adjustment` |
| `Payment` |
| `Refund` |
| `InfoTransaction` |
| `PaymentAuthorization` |

## Example

```ts
import { LineItemTransactionType } from '@maxio-com/advanced-billing-sdk';

const lineItemTransactionType = LineItemTransactionType.Payment;
```

