
# Coupon Usage

## Structure

`CouponUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The Chargify id of the product |
| `name` | `string \| undefined` | Optional | Name of the product |
| `signups` | `number \| undefined` | Optional | Number of times the coupon has been applied |
| `savings` | `number \| null \| undefined` | Optional | Dollar amount of customer savings as a result of the coupon. |
| `savingsInCents` | `number \| null \| undefined` | Optional | Dollar amount of customer savings as a result of the coupon. |
| `revenue` | `number \| null \| undefined` | Optional | Total revenue of the all subscriptions that have received a discount from this coupon. |
| `revenueInCents` | `number \| undefined` | Optional | Total revenue of the all subscriptions that have received a discount from this coupon. |

## Example (as JSON)

```json
{
  "id": 14,
  "name": "name0",
  "signups": 34,
  "savings": 52,
  "savings_in_cents": 138
}
```

