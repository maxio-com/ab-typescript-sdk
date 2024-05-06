
# Subscription Component

## Structure

`SubscriptionComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `kind` | [`ComponentKind \| undefined`](../../doc/models/component-kind.md) | Optional | A handle for the component type |
| `unitName` | `string \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | (for on/off components) indicates if the component is enabled for the subscription |
| `unitBalance` | `number \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `allocatedQuantity` | [`SubscriptionComponentAllocatedQuantity \| undefined`](../../doc/models/containers/subscription-component-allocated-quantity.md) | Optional | This is a container for one-of cases. |
| `pricingScheme` | [`PricingScheme \| null \| undefined`](../../doc/models/pricing-scheme.md) | Optional | - |
| `componentId` | `number \| undefined` | Optional | - |
| `componentHandle` | `string \| null \| undefined` | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `recurring` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `downgradeCredit` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `archivedAt` | `string \| null \| undefined` | Optional | - |
| `pricePointId` | `number \| null \| undefined` | Optional | - |
| `pricePointHandle` | `string \| null \| undefined` | Optional | - |
| `pricePointType` | [`PricePointType \| null \| undefined`](../../doc/models/price-point-type.md) | Optional | - |
| `pricePointName` | `string \| null \| undefined` | Optional | - |
| `productFamilyId` | `number \| undefined` | Optional | - |
| `productFamilyHandle` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `useSiteExchangeRate` | `boolean \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `allowFractionalQuantities` | `boolean \| undefined` | Optional | - |
| `subscription` | [`SubscriptionComponentSubscription \| undefined`](../../doc/models/subscription-component-subscription.md) | Optional | An optional object, will be returned if provided `include=subscription` query param. |
| `historicUsages` | [`HistoricUsage[] \| undefined`](../../doc/models/historic-usage.md) | Optional | - |
| `displayOnHostedPage` | `boolean \| undefined` | Optional | - |
| `interval` | `number \| undefined` | Optional | The numerical interval. i.e. an interval of '30' coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. |
| `intervalUnit` | [`IntervalUnit \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. |

## Example (as JSON)

```json
{
  "id": 20,
  "name": "name8",
  "kind": "quantity_based_component",
  "unit_name": "unit_name0",
  "enabled": false
}
```

