
# Component Price Point

## Structure

`ComponentPricePoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `type` | [`PricePointType \| undefined`](../../doc/models/price-point-type.md) | Optional | Price point type. We expose the following types:<br><br>1. **default**: a price point that is marked as a default price for a certain product.<br>2. **custom**: a custom price point.<br>3. **catalog**: a price point that is **not** marked as a default price for a certain product and is **not** a custom one. |
| `mDefault` | `boolean \| undefined` | Optional | Note: Refer to type attribute instead |
| `name` | `string \| undefined` | Optional | - |
| `pricingScheme` | `string \| undefined` | Optional | - |
| `componentId` | `number \| undefined` | Optional | - |
| `handle` | `string \| undefined` | Optional | - |
| `archivedAt` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `prices` | [`ComponentPricePointPrice[] \| undefined`](../../doc/models/component-price-point-price.md) | Optional | - |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site.<br>**Default**: `true` |
| `subscriptionId` | `number \| undefined` | Optional | (only used for Custom Pricing - ie. when the price point's type is `custom`) The id of the subscription that the custom price point is for. |
| `taxIncluded` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "use_site_exchange_rate": true,
  "id": 190,
  "type": "custom",
  "default": false,
  "name": "name2",
  "pricing_scheme": "pricing_scheme6"
}
```

