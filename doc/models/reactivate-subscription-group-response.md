
# Reactivate Subscription Group Response

## Structure

`ReactivateSubscriptionGroupResponse`

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

## Example (as JSON)

```json
{
  "uid": "uid4",
  "scheme": 66,
  "customer_id": 86,
  "payment_profile_id": 250,
  "subscription_ids": [
    196,
    197
  ]
}
```

