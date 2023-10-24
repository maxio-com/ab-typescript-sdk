
# Create Prepaid Usage Component Price Point

## Structure

`CreatePrepaidUsageComponentPricePoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `handle` | `string \| undefined` | Optional | - |
| `pricingScheme` | `string` | Required | - |
| `prices` | [`Price[]`](../../doc/models/price.md) | Required | - |
| `overagePricing` | [`OveragePricing`](../../doc/models/overage-pricing.md) | Required | - |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site.<br>**Default**: `true` |
| `rolloverPrepaidRemainder` | `boolean \| undefined` | Optional | Boolean which controls whether or not remaining units should be rolled over to the next period |
| `renewPrepaidAllocation` | `boolean \| undefined` | Optional | Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period |
| `expirationInterval` | `number \| undefined` | Optional | (only for prepaid usage components where rollover_prepaid_remainder is true) The number of `expiration_interval_unit`s after which rollover amounts should expire |
| `expirationIntervalUnit` | [`CreatePrepaidUsageComponentPricePointExpirationIntervalUnit \| undefined`](../../doc/models/containers/create-prepaid-usage-component-price-point-expiration-interval-unit.md) | Optional | This is a container for one-of cases. |

## Example (as JSON)

```json
{
  "name": "name0",
  "pricing_scheme": "pricing_scheme8",
  "prices": [
    {
      "starting_quantity": 242,
      "ending_quantity": 40,
      "unit_price": 23.26
    }
  ],
  "overage_pricing": {
    "pricing_scheme": "volume",
    "prices": [
      {
        "starting_quantity": 242,
        "ending_quantity": 40,
        "unit_price": 23.26
      }
    ]
  },
  "use_site_exchange_rate": true,
  "handle": "handle6",
  "rollover_prepaid_remainder": false,
  "renew_prepaid_allocation": false,
  "expiration_interval": 101.18
}
```

