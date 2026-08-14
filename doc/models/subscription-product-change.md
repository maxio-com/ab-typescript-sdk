
# Subscription Product Change

Event data for both `subscription_product_change` and `subscription_product_change_scheduled`. The price point and `effective_at` fields are only populated for scheduled changes.

## Structure

`SubscriptionProductChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `previousProductId` | `number` | Required | - |
| `newProductId` | `number` | Required | - |
| `previousProductPricePointId` | `number \| null \| undefined` | Optional | - |
| `newProductPricePointId` | `number \| null \| undefined` | Optional | - |
| `effectiveAt` | `string \| null \| undefined` | Optional | When the scheduled product change takes effect (the subscription's next renewal). Only sent for `subscription_product_change_scheduled`. |

## Example

```ts
import { SubscriptionProductChange } from '@maxio-com/advanced-billing-sdk';

const subscriptionProductChange: SubscriptionProductChange = {
  previousProductId: 104,
  newProductId: 10,
  previousProductPricePointId: 228,
  newProductPricePointId: 222,
  effectiveAt: '2016-03-13T12:52:32.123Z',
};
```

