
# Create Subscription Component

## Structure

`CreateSubscriptionComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | [`CreateSubscriptionComponentComponentId \| undefined`](../../doc/models/containers/create-subscription-component-component-id.md) | Optional | This is a container for one-of cases. |
| `enabled` | `boolean \| undefined` | Optional | Used for on/off components only. |
| `unitBalance` | [`CreateSubscriptionComponentUnitBalance \| undefined`](../../doc/models/containers/create-subscription-component-unit-balance.md) | Optional | This is a container for one-of cases. |
| `allocatedQuantity` | [`CreateSubscriptionComponentAllocatedQuantity \| undefined`](../../doc/models/containers/create-subscription-component-allocated-quantity.md) | Optional | This is a container for one-of cases. |
| `quantity` | `number \| undefined` | Optional | Deprecated. Use `allocated_quantity` instead. |
| `pricePointId` | [`CreateSubscriptionComponentPricePointId \| undefined`](../../doc/models/containers/create-subscription-component-price-point-id.md) | Optional | This is a container for one-of cases. |
| `customPrice` | [`ComponentCustomPrice \| undefined`](../../doc/models/component-custom-price.md) | Optional | Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. |

## Example

```ts
import { CreateSubscriptionComponent } from '@maxio-com/advanced-billing-sdk';

const createSubscriptionComponent: CreateSubscriptionComponent = {
  componentId: 210,
  enabled: false,
  unitBalance: 12,
  allocatedQuantity: 48,
  quantity: 134,
};
```

