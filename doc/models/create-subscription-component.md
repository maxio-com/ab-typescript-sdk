
# Create Subscription Component

## Structure

`CreateSubscriptionComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | [`CreateSubscriptionComponentComponentId \| undefined`](../../doc/models/containers/create-subscription-component-component-id.md) | Optional | This is a container for one-of cases. |
| `enabled` | `boolean \| undefined` | Optional | Used for on/off components only. |
| `unitBalance` | `number \| undefined` | Optional | Used for metered and events based components. |
| `allocatedQuantity` | `number \| undefined` | Optional | Used for quantity based components. |
| `quantity` | `number \| undefined` | Optional | Deprecated. Use `allocated_quantity` instead. |
| `pricePointId` | [`CreateSubscriptionComponentPricePointId \| undefined`](../../doc/models/containers/create-subscription-component-price-point-id.md) | Optional | This is a container for one-of cases. |
| `customPrice` | [`ComponentCustomPrice \| undefined`](../../doc/models/component-custom-price.md) | Optional | Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. |

## Example (as JSON)

```json
{
  "component_id": 8,
  "enabled": false,
  "unit_balance": 144,
  "allocated_quantity": 180,
  "quantity": 188
}
```

