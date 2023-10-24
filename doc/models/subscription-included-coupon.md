
# Subscription Included Coupon

## Structure

`SubscriptionIncludedCoupon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | - |
| `useCount` | `number \| undefined` | Optional | - |
| `usesAllowed` | `number \| undefined` | Optional | - |
| `expiresAt` | `string \| null \| undefined` | Optional | - |
| `recurring` | `boolean \| undefined` | Optional | - |
| `amountInCents` | `number \| null \| undefined` | Optional | - |
| `percentage` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "code": "\"ABCD_10\"",
  "use_count": 2,
  "uses_allowed": 10,
  "expires_at": "\"2023-07-13T05:18:58-04:00\"",
  "amount_in_cents": 1000,
  "percentage": "\"15.0\"",
  "recurring": false
}
```

