
# Currency Price

## Structure

`CurrencyPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `price` | `number \| undefined` | Optional | - |
| `formattedPrice` | `string \| undefined` | Optional | - |
| `productPricePointId` | `number \| undefined` | Optional | - |
| `role` | [`CurrencyPriceRole \| undefined`](../../doc/models/currency-price-role.md) | Optional | Role for the price. |

## Example (as JSON)

```json
{
  "id": 88,
  "currency": "currency6",
  "price": 41.36,
  "formatted_price": "formatted_price4",
  "product_price_point_id": 210
}
```

