
# Subscription Group Subscription Error

Object which contains subscription errors.

## Structure

`SubscriptionGroupSubscriptionError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | `string[] \| undefined` | Optional | - |
| `product` | `string[] \| undefined` | Optional | - |
| `productPricePointId` | `string[] \| undefined` | Optional | - |
| `paymentProfile` | `string[] \| undefined` | Optional | - |
| `paymentProfileChargifyToken` | `string[] \| undefined` | Optional | - |
| `base` | `string[] \| undefined` | Optional | - |
| `paymentProfileExpirationMonth` | `string[] \| undefined` | Optional | - |
| `paymentProfileExpirationYear` | `string[] \| undefined` | Optional | - |
| `paymentProfileFullNumber` | `string[] \| undefined` | Optional | - |

## Example

```ts
import {
  SubscriptionGroupSubscriptionError,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupSubscriptionError: SubscriptionGroupSubscriptionError = {
  customer: [
    'customer7',
    'customer8',
    'customer9'
  ],
  product: [
    'product7',
    'product8'
  ],
  productPricePointId: [
    'product_price_point_id3',
    'product_price_point_id4'
  ],
  paymentProfile: [
    'payment_profile8',
    'payment_profile9'
  ],
  paymentProfileChargifyToken: [
    'payment_profile.chargify_token2',
    'payment_profile.chargify_token3'
  ],
};
```

