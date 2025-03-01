
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
| `pricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `componentId` | `number \| undefined` | Optional | - |
| `handle` | `string \| null \| undefined` | Optional | - |
| `archivedAt` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `prices` | [`ComponentPrice[] \| undefined`](../../doc/models/component-price.md) | Optional | - |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. Defaults to true during creation. |
| `subscriptionId` | `number \| undefined` | Optional | (only used for Custom Pricing - ie. when the price point's type is `custom`) The id of the subscription that the custom price point is for. |
| `taxIncluded` | `boolean \| undefined` | Optional | - |
| `interval` | `number \| null \| undefined` | Optional | The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. |
| `intervalUnit` | [`IntervalUnit \| null \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. |
| `currencyPrices` | [`ComponentCurrencyPrice[] \| undefined`](../../doc/models/component-currency-price.md) | Optional | An array of currency pricing data is available when multiple currencies are defined for the site. It varies based on the use_site_exchange_rate setting for the price point. This parameter is present only in the response of read endpoints, after including the appropriate query parameter. |
| `overagePrices` | [`ComponentPrice[] \| undefined`](../../doc/models/component-price.md) | Optional | Applicable only to prepaid usage components. An array of overage price brackets. |
| `overagePricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | Applicable only to prepaid usage components. Pricing scheme for overage pricing. |
| `renewPrepaidAllocation` | `boolean \| undefined` | Optional | Applicable only to prepaid usage components. Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period. |
| `rolloverPrepaidRemainder` | `boolean \| undefined` | Optional | Applicable only to prepaid usage components. Boolean which controls whether or not remaining units should be rolled over to the next period. |
| `expirationInterval` | `number \| null \| undefined` | Optional | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. The number of `expiration_interval_unit`s after which rollover amounts should expire. |
| `expirationIntervalUnit` | [`ExpirationIntervalUnit \| null \| undefined`](../../doc/models/expiration-interval-unit.md) | Optional | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. A string representing the expiration interval unit for this component, either month or day. |

## Example (as JSON)

```json
{
  "id": 190,
  "type": "custom",
  "default": false,
  "name": "name2",
  "pricing_scheme": "stairstep"
}
```

