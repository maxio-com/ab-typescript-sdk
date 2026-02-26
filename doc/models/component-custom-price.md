
# Component Custom Price

Create or update custom pricing unique to the subscription. Used in place of `price_point_id`.

## Structure

`ComponentCustomPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxIncluded` | `boolean \| undefined` | Optional | Whether or not the price point includes tax |
| `pricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | Omit for On/Off components |
| `interval` | `number \| undefined` | Optional | The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. |
| `intervalUnit` | [`IntervalUnit \| null \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. |
| `listPricePointId` | `number \| null \| undefined` | Optional | Optional id of the price point to use for list price calculations when<br>overriding the customer price. |
| `useDefaultListPrice` | `boolean \| undefined` | Optional | When true, list price calculations will continue to use the default price point even when a `custom_price` is supplied. |
| `prices` | [`Price[]`](../../doc/models/price.md) | Required | On/off components only need one price bracket starting at 1. |
| `renewPrepaidAllocation` | `boolean \| undefined` | Optional | Applicable only to prepaid usage components. Controls whether the allocated quantity renews each period. |
| `rolloverPrepaidRemainder` | `boolean \| undefined` | Optional | Applicable only to prepaid usage components. Controls whether remaining units roll over to the next period. |
| `expirationInterval` | `number \| null \| undefined` | Optional | Applicable only when rollover is enabled. Number of `expiration_interval_unit`s after which rollover amounts expire. |
| `expirationIntervalUnit` | [`ExpirationIntervalUnit \| null \| undefined`](../../doc/models/expiration-interval-unit.md) | Optional | Applicable only when rollover is enabled. Interval unit for rollover expiration (month or day). |

## Example (as JSON)

```json
{
  "prices": [
    {
      "starting_quantity": 242,
      "ending_quantity": 40,
      "unit_price": 23.26
    }
  ],
  "tax_included": false,
  "pricing_scheme": "stairstep",
  "interval": 162,
  "interval_unit": "day",
  "list_price_point_id": 146
}
```

