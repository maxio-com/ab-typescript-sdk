
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

## Example

```ts
import {
  SubscriptionGroupSignupError,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupSignupError: SubscriptionGroupSignupError = {
  subscriptions: {
    'key0': {
      product: [
        'product9'
      ],
      productPricePointId: [
        'product_price_point_id7'
      ],
      paymentProfile: [
        'payment_profile2'
      ],
      paymentProfileChargifyToken: [
        'payment_profile.chargify_token6'
      ],
      base: [
        'base5',
        'base6'
      ],
    },
    'key1': {
      product: [
        'product9'
      ],
      productPricePointId: [
        'product_price_point_id7'
      ],
      paymentProfile: [
        'payment_profile2'
      ],
      paymentProfileChargifyToken: [
        'payment_profile.chargify_token6'
      ],
      base: [
        'base5',
        'base6'
      ],
    },
    'key2': {
      product: [
        'product9'
      ],
      productPricePointId: [
        'product_price_point_id7'
      ],
      paymentProfile: [
        'payment_profile2'
      ],
      paymentProfileChargifyToken: [
        'payment_profile.chargify_token6'
      ],
      base: [
        'base5',
        'base6'
      ],
    }
  },
  payerReference: 'payer_reference8',
  payer: {
    lastName: [
      'last_name5',
      'last_name6'
    ],
    firstName: [
      'first_name8'
    ],
    email: [
      'email0',
      'email9'
    ],
  },
  subscriptionGroup: [
    'subscription_group3',
    'subscription_group4',
    'subscription_group5'
  ],
  paymentProfileId: 'payment_profile_id4',
};
```

