
# Created Prepayment

## Structure

`CreatedPrepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | **Constraints**: `>= 1` |
| `subscriptionId` | `number \| undefined` | Optional | **Constraints**: `>= 1` |
| `amountInCents` | `bigint \| undefined` | Optional | **Constraints**: `>= 0.01` |
| `memo` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `startingBalanceInCents` | `bigint \| undefined` | Optional | **Constraints**: `>= 0` |
| `endingBalanceInCents` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 110,
  "subscription_id": 220,
  "amount_in_cents": 196,
  "memo": "memo6",
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

