
# Prepaid Component Price Point

## Structure

`PrepaidComponentPricePoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `handle` | `string \| undefined` | Optional | - |
| `pricingScheme` | `string \| undefined` | Optional | - |
| `prices` | [`CreateComponentPrice[] \| undefined`](../../doc/models/create-component-price.md) | Optional | - |
| `overagePricing` | [`OveragePricing \| undefined`](../../doc/models/overage-pricing.md) | Optional | - |

## Example (as JSON)

```json
{
  "name": "name8",
  "handle": "handle4",
  "pricing_scheme": "pricing_scheme0",
  "prices": [
    {
      "starting_quantity": 64,
      "unit_price": "String3"
    },
    {
      "starting_quantity": 64,
      "unit_price": "String3"
    }
  ],
  "overage_pricing": {
    "pricing_scheme": "volume",
    "prices": [
      [
        {
          "starting_quantity": 40,
          "ending_quantity": 14,
          "unit_price": 212
        },
        {
          "starting_quantity": 40,
          "ending_quantity": 14,
          "unit_price": 212
        }
      ]
    ]
  }
}
```

