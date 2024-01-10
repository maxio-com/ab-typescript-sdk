
# Offer Item

## Structure

`OfferItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |
| `startingQuantity` | `string \| undefined` | Optional | - |
| `editable` | `boolean \| undefined` | Optional | - |
| `componentUnitPrice` | `string \| undefined` | Optional | - |
| `componentName` | `string \| undefined` | Optional | - |
| `pricePointName` | `string \| undefined` | Optional | - |
| `currencyPrices` | [`CurrencyPrice[] \| undefined`](../../doc/models/currency-price.md) | Optional | - |
| `interval` | `number \| undefined` | Optional | The numerical interval. i.e. an interval of '30' coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. |
| `intervalUnit` | [`IntervalUnit \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. |

## Example (as JSON)

```json
{
  "component_id": 216,
  "price_point_id": 16,
  "starting_quantity": "starting_quantity0",
  "editable": false,
  "component_unit_price": "component_unit_price8"
}
```

