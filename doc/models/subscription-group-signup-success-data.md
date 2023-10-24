
# Subscription Group Signup Success Data

## Structure

`SubscriptionGroupSignupSuccessData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Required | - |
| `scheme` | `number` | Required | - |
| `customerId` | `number` | Required | - |
| `paymentProfileId` | `number` | Required | - |
| `subscriptionIds` | `number[]` | Required | - |
| `primarySubscriptionId` | `number` | Required | - |
| `nextAssessmentAt` | `string` | Required | - |
| `state` | `string` | Required | - |
| `cancelAtEndOfPeriod` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "uid": "uid8",
  "scheme": 154,
  "customer_id": 174,
  "payment_profile_id": 82,
  "subscription_ids": [
    28,
    29
  ],
  "primary_subscription_id": 102,
  "next_assessment_at": "next_assessment_at2",
  "state": "state4",
  "cancel_at_end_of_period": false
}
```

