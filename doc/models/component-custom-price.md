
# Component Custom Price

Create or update custom pricing unique to the subscription. Used in place of `price_point_id`.

## Structure

`ComponentCustomPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | Omit for On/Off components |
| `interval` | `number \| undefined` | Optional | The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. |
| `intervalUnit` | [`IntervalUnit \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. |
| `prices` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | On/off components only need one price bracket starting at 1 |

## Example (as JSON)

```json
{
  "pricing_scheme": "stairstep",
  "interval": 162,
  "interval_unit": "day",
  "prices": [
    {
      "starting_quantity": 242,
      "ending_quantity": 40,
      "unit_price": 23.26
    }
  ]
}
```

