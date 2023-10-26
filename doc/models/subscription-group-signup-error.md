
# Subscription Group Signup Error

## Structure

`SubscriptionGroupSignupError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptions` | [`Record<string, SubscriptionGroupSubscriptionError> \| undefined`](../../doc/models/subscription-group-subscription-error.md) | Optional | Object that as key have subscription position in request subscriptions array and as value subscription errors object. |
| `payerReference` | `string \| undefined` | Optional | - |
| `payer` | [`PayerError \| undefined`](../../doc/models/payer-error.md) | Optional | - |
| `subscriptionGroup` | `string[] \| undefined` | Optional | - |
| `paymentProfileId` | `string \| undefined` | Optional | - |
| `payerId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "subscriptions": {
    "key0": {
      "product": [
        "product9"
      ],
      "product_price_point_id": [
        "product_price_point_id7"
      ],
      "payment_profile": [
        "payment_profile2"
      ],
      "payment_profile.chargify_token": [
        "payment_profile.chargify_token6"
      ]
    },
    "key1": {
      "product": [
        "product9"
      ],
      "product_price_point_id": [
        "product_price_point_id7"
      ],
      "payment_profile": [
        "payment_profile2"
      ],
      "payment_profile.chargify_token": [
        "payment_profile.chargify_token6"
      ]
    }
  },
  "payer_reference": "payer_reference0",
  "payer": {
    "last_name": [
      "last_name5",
      "last_name6"
    ],
    "first_name": [
      "first_name8"
    ],
    "email": [
      "email0",
      "email9"
    ]
  },
  "subscription_group": [
    "subscription_group1",
    "subscription_group2"
  ],
  "payment_profile_id": "payment_profile_id2"
}
```
