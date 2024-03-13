
# Subscription Group

## Structure

`SubscriptionGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `number \| undefined` | Optional | - |
| `paymentProfile` | [`SubscriptionGroupPaymentProfile \| undefined`](../../doc/models/subscription-group-payment-profile.md) | Optional | - |
| `paymentCollectionMethod` | [`CollectionMethod \| undefined`](../../doc/models/collection-method.md) | Optional | The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`.<br>**Default**: `CollectionMethod.Automatic` |
| `subscriptionIds` | `number[] \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "payment_collection_method": "automatic",
  "customer_id": 36,
  "payment_profile": {
    "id": 44,
    "first_name": "first_name4",
    "last_name": "last_name2",
    "masked_card_number": "masked_card_number2"
  },
  "subscription_ids": [
    146,
    147,
    148
  ],
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

