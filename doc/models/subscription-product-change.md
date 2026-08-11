
# Subscription Product Change

## Structure

`SubscriptionProductChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `previousProductId` | `number` | Required | - |
| `newProductId` | `number` | Required | - |

## Example

```ts
import { SubscriptionProductChange } from '@maxio-com/advanced-billing-sdk';

const subscriptionProductChange: SubscriptionProductChange = {
  previousProductId: 104,
  newProductId: 10,
};
```

