
# Overage Pricing

## Structure

`OveragePricing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingScheme` | [`OveragePricingPricingScheme`](../../doc/models/containers/overage-pricing-pricing-scheme.md) | Required | This is a container for one-of cases. |
| `prices` | [`OveragePricingPrices[] \| undefined`](../../doc/models/containers/overage-pricing-prices.md) | Optional | This is Array of a container for one-of cases. |

## Example (as JSON)

```json
{
  "pricing_scheme": "volume",
  "prices": [
    [
      {
        "starting_quantity": 40,
        "ending_quantity": 14,
        "unit_price": 212
      }
    ],
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
    ],
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
      },
      {
        "starting_quantity": 40,
        "ending_quantity": 14,
        "unit_price": 212
      }
    ]
  ]
}
```

