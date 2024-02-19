
# Invoice Pre Payment

## Structure

`InvoicePrePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number \| undefined` | Optional | The subscription id for the prepayment account |
| `amountInCents` | `bigint \| undefined` | Optional | The amount in cents of the prepayment that was created as a result of this payment. |
| `endingBalanceInCents` | `bigint \| undefined` | Optional | The total balance of the prepayment account for this subscription including any prior prepayments |

## Example (as JSON)

```json
{
  "subscription_id": 180,
  "amount_in_cents": 100,
  "ending_balance_in_cents": 60
}
```

