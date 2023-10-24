
# Full Subscription Group Response

## Structure

`FullSubscriptionGroupResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `scheme` | `number \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `paymentProfileId` | `number \| undefined` | Optional | - |
| `subscriptionIds` | `number[] \| undefined` | Optional | - |
| `primarySubscriptionId` | `number \| undefined` | Optional | - |
| `nextAssessmentAt` | `string \| undefined` | Optional | - |
| `state` | `string \| undefined` | Optional | - |
| `cancelAtEndOfPeriod` | `boolean \| undefined` | Optional | - |
| `currentBillingAmountInCents` | `number \| undefined` | Optional | - |
| `customer` | [`SubscriptionGroupCustomer \| undefined`](../../doc/models/subscription-group-customer.md) | Optional | - |
| `accountBalances` | [`SubscriptionGroupBalances \| undefined`](../../doc/models/subscription-group-balances.md) | Optional | - |

## Example (as JSON)

```json
{
  "uid": "uid8",
  "scheme": 90,
  "customer_id": 110,
  "payment_profile_id": 18,
  "subscription_ids": [
    220,
    221,
    222
  ]
}
```

