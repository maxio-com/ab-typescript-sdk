
# Invoice Pre Payment

## Structure

`InvoicePrePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number \| undefined` | Optional | The subscription id for the prepayment account |
| `amountInCents` | `bigint \| undefined` | Optional | The amount in cents of the prepayment that was created as a result of this payment. |
| `endingBalanceInCents` | `bigint \| undefined` | Optional | The total balance of the prepayment account for this subscription including any prior prepayments |

## Example

```ts
import { InvoicePrePayment } from '@maxio-com/advanced-billing-sdk';

const invoicePrePayment: InvoicePrePayment = {
  subscriptionId: 252,
  amountInCents: BigInt(28),
  endingBalanceInCents: BigInt(244),
};
```

