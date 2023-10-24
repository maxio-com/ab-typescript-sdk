
# Pre Payment

## Structure

`PrePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string \| undefined` | Optional | The subscription id for the prepayment account |
| `amountInCents` | `string \| undefined` | Optional | The amount in cents of the prepayment that was created as a result of this payment. |
| `endingBalanceInCents` | `string \| undefined` | Optional | The total balance of the prepayment account for this subscription including any prior prepayments |

## Example (as JSON)

```json
{
  "subscription_id": "subscription_id0",
  "amount_in_cents": "amount_in_cents8",
  "ending_balance_in_cents": "ending_balance_in_cents6"
}
```

