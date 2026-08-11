
# Create Subscription Request

## Structure

`CreateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`CreateSubscription`](../../doc/models/create-subscription.md) | Required | - |

## Example

```ts
import {
  CreateSubscriptionRequest,
  IntervalUnit,
} from '@maxio-com/advanced-billing-sdk';

const createSubscriptionRequest: CreateSubscriptionRequest = {
  subscription: {
    productHandle: 'product_handle6',
    productId: 206,
    productPricePointHandle: 'product_price_point_handle2',
    productPricePointId: 130,
    customPrice: {
      priceInCents: 'String3',
      interval: 'String3',
      intervalUnit: IntervalUnit.Day,
      name: 'name4',
      handle: 'handle0',
      trialPriceInCents: 'String3',
      trialInterval: 'String5',
      trialIntervalUnit: IntervalUnit.Day,
    },
    deferSignup: false,
    metafields: {
      'custom_field_name_1': 'custom_field_value_1',
      'custom_field_name_2': 'custom_field_value_2'
    },
    dunningCommunicationDelayEnabled: false,
    dunningCommunicationDelayTimeZone: '"Eastern Time (US & Canada)"',
  },
};
```

