
# Component Cost Data

## Structure

`ComponentCostData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentCodeId` | `number \| null \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |
| `productId` | `number \| undefined` | Optional | - |
| `quantity` | `string \| undefined` | Optional | - |
| `amount` | `string \| undefined` | Optional | - |
| `pricingScheme` | [`ComponentCostDataPricingScheme \| undefined`](../../doc/models/containers/component-cost-data-pricing-scheme.md) | Optional | This is a container for one-of cases. |
| `tiers` | [`ComponentCostDataRateTier[] \| undefined`](../../doc/models/component-cost-data-rate-tier.md) | Optional | - |

## Example (as JSON)

```json
{
  "component_code_id": 16,
  "price_point_id": 186,
  "product_id": 250,
  "quantity": "quantity8",
  "amount": "amount4"
}
```

