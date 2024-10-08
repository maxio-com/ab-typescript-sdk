
# Product Price Point

## Structure

`ProductPricePoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | The product price point name |
| `handle` | `string \| null \| undefined` | Optional | The product price point API handle |
| `priceInCents` | `bigint \| undefined` | Optional | The product price point price, in integer cents |
| `interval` | `number \| undefined` | Optional | The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this product price point would renew every 30 days |
| `intervalUnit` | [`IntervalUnit \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the interval unit for this product price point, either month or day |
| `trialPriceInCents` | `bigint \| null \| undefined` | Optional | The product price point trial price, in integer cents |
| `trialInterval` | `number \| null \| undefined` | Optional | The numerical trial interval. i.e. an interval of ‘30’ coupled with a trial_interval_unit of day would mean this product price point trial would last 30 days |
| `trialIntervalUnit` | [`IntervalUnit \| null \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the trial interval unit for this product price point, either month or day |
| `trialType` | `string \| undefined` | Optional | - |
| `introductoryOffer` | `boolean \| null \| undefined` | Optional | reserved for future use |
| `initialChargeInCents` | `bigint \| null \| undefined` | Optional | The product price point initial charge, in integer cents |
| `initialChargeAfterTrial` | `boolean \| null \| undefined` | Optional | - |
| `expirationInterval` | `number \| null \| undefined` | Optional | The numerical expiration interval. i.e. an expiration_interval of ‘30’ coupled with an expiration_interval_unit of day would mean this product price point would expire after 30 days |
| `expirationIntervalUnit` | [`ExpirationIntervalUnit \| null \| undefined`](../../doc/models/expiration-interval-unit.md) | Optional | A string representing the expiration interval unit for this product price point, either month, day or never |
| `productId` | `number \| undefined` | Optional | The product id this price point belongs to |
| `archivedAt` | `string \| null \| undefined` | Optional | Timestamp indicating when this price point was archived |
| `createdAt` | `string \| undefined` | Optional | Timestamp indicating when this price point was created |
| `updatedAt` | `string \| undefined` | Optional | Timestamp indicating when this price point was last updated |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined. |
| `type` | [`PricePointType \| undefined`](../../doc/models/price-point-type.md) | Optional | The type of price point |
| `taxIncluded` | `boolean \| undefined` | Optional | Whether or not the price point includes tax |
| `subscriptionId` | `number \| null \| undefined` | Optional | The subscription id this price point belongs to |
| `currencyPrices` | [`CurrencyPrice[] \| undefined`](../../doc/models/currency-price.md) | Optional | An array of currency pricing data is available when multiple currencies are defined for the site. It varies based on the use_site_exchange_rate setting for the price point. This parameter is present only in the response of read endpoints, after including the appropriate query parameter. |

## Example (as JSON)

```json
{
  "id": 196,
  "name": "name6",
  "handle": "handle2",
  "price_in_cents": 248,
  "interval": 8
}
```

