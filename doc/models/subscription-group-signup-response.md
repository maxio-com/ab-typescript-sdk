
# Subscription Group Signup Response

## Structure

`SubscriptionGroupSignupResponse`

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
| `subscriptions` | [`SubscriptionGroupItem[] \| undefined`](../../doc/models/subscription-group-item.md) | Optional | - |
| `paymentCollectionMethod` | [`PaymentCollectionMethod \| undefined`](../../doc/models/payment-collection-method.md) | Optional | The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`.<br>**Default**: `PaymentCollectionMethod.Automatic` |

## Example (as JSON)

```json
{
  "payment_collection_method": "automatic",
  "uid": "uid8",
  "scheme": 28,
  "customer_id": 48,
  "payment_profile_id": 44,
  "subscription_ids": [
    158,
    159,
    160
  ]
}
```

