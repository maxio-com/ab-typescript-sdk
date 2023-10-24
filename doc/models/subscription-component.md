
# Subscription Component

## Structure

`SubscriptionComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `kind` | `string \| undefined` | Optional | - |
| `unitName` | `string \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | (for on/off components) indicates if the component is enabled for the subscription |
| `unitBalance` | `number \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `allocatedQuantity` | `number \| undefined` | Optional | For Quantity-based components: The current allocation for the component on the given subscription. For On/Off components: Use 1 for on. Use 0 for off. |
| `pricingScheme` | `string \| null \| undefined` | Optional | - |
| `componentId` | `number \| undefined` | Optional | - |
| `componentHandle` | `string \| null \| undefined` | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `recurring` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | `string \| null \| undefined` | Optional | - |
| `downgradeCredit` | `string \| null \| undefined` | Optional | - |
| `archivedAt` | `string \| null \| undefined` | Optional | - |
| `pricePointId` | `number \| null \| undefined` | Optional | - |
| `pricePointHandle` | `string \| null \| undefined` | Optional | - |
| `pricePointType` | [`SubscriptionComponentPricePointType \| undefined`](../../doc/models/containers/subscription-component-price-point-type.md) | Optional | This is a container for one-of cases. |
| `pricePointName` | `string \| null \| undefined` | Optional | - |
| `productFamilyId` | `number \| undefined` | Optional | - |
| `productFamilyHandle` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `useSiteExchangeRate` | `boolean \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `allowFractionalQuantities` | `boolean \| undefined` | Optional | - |
| `subscription` | [`SubscriptionComponentSubscription \| undefined`](../../doc/models/subscription-component-subscription.md) | Optional | An optional object, will be returned if provided `include=subscription` query param. |
| `displayOnHostedPage` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 20,
  "name": "name8",
  "kind": "kind6",
  "unit_name": "unit_name0",
  "enabled": false
}
```

