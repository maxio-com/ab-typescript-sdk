
# Subscription Product Change Scheduled

## Structure

`SubscriptionProductChangeScheduled`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `previousProductId` | `number` | Required | - |
| `newProductId` | `number` | Required | - |
| `previousProductPricePointId` | `number \| null \| undefined` | Optional | - |
| `newProductPricePointId` | `number \| null \| undefined` | Optional | - |
| `effectiveAt` | `string \| null \| undefined` | Optional | When the scheduled product change takes effect (the subscription's next renewal). |

## Example

```ts
import {
  SubscriptionProductChangeScheduled,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionProductChangeScheduled: SubscriptionProductChangeScheduled = {
  previousProductId: 26,
  newProductId: 88,
  previousProductPricePointId: 150,
  newProductPricePointId: 144,
  effectiveAt: '2016-03-13T12:52:32.123Z',
};
```

