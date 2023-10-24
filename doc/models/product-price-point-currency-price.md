
# Product Price Point Currency Price

object Product Price Point Currency Price:

## Structure

`ProductPricePointCurrencyPrice`

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
  "id": 254,
  "currency": "currency2",
  "price": 130,
  "formatted_price": "formatted_price0",
  "product_price_point_id": 120
}
```

