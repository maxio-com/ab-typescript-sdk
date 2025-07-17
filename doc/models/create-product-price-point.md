
# Create Product Price Point

## Structure

`CreateProductPricePoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The product price point name |
| `handle` | `string \| undefined` | Optional | The product price point API handle |
| `priceInCents` | `bigint` | Required | The product price point price, in integer cents |
| `interval` | `number` | Required | The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this product price point would renew every 30 days |
| `intervalUnit` | [`IntervalUnit`](../../doc/models/interval-unit.md) | Required | A string representing the interval unit for this product price point, either month or day |
| `trialPriceInCents` | `bigint \| undefined` | Optional | The product price point trial price, in integer cents |
| `trialInterval` | `number \| undefined` | Optional | The numerical trial interval. i.e. an interval of ‘30’ coupled with a trial_interval_unit of day would mean this product price point trial would last 30 days. |
| `trialIntervalUnit` | [`IntervalUnit \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the trial interval unit for this product price point, either month or day |
| `trialType` | `string \| undefined` | Optional | - |
| `initialChargeInCents` | `bigint \| undefined` | Optional | The product price point initial charge, in integer cents |
| `initialChargeAfterTrial` | `boolean \| undefined` | Optional | - |
| `expirationInterval` | `number \| undefined` | Optional | The numerical expiration interval. i.e. an expiration_interval of ‘30’ coupled with an expiration_interval_unit of day would mean this product price point would expire after 30 days. |
| `expirationIntervalUnit` | [`ExpirationIntervalUnit \| null \| undefined`](../../doc/models/expiration-interval-unit.md) | Optional | A string representing the expiration interval unit for this product price point, either month, day or never |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined.<br><br>**Default**: `true` |

## Example (as JSON)

```json
{
  "name": "name6",
  "price_in_cents": 216,
  "interval": 200,
  "interval_unit": "day",
  "use_site_exchange_rate": true,
  "handle": "handle2",
  "trial_price_in_cents": 48,
  "trial_interval": 102,
  "trial_interval_unit": "day",
  "trial_type": "trial_type0"
}
```

