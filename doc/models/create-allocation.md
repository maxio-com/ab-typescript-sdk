
# Create Allocation

## Structure

`CreateAllocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `quantity` | [`CreateAllocationQuantity`](../../doc/models/containers/create-allocation-quantity.md) | Required | This is a container for one-of cases. |
| `componentId` | `number \| undefined` | Optional | (required for the multiple allocations endpoint) The id associated with the component for which the allocation is being made |
| `memo` | `string \| undefined` | Optional | A memo to record along with the allocation |
| `prorationDowngradeScheme` | `string \| undefined` | Optional | The scheme used if the proration is a downgrade. Defaults to the site setting if one is not provided. |
| `prorationUpgradeScheme` | `string \| undefined` | Optional | The scheme used if the proration is an upgrade. Defaults to the site setting if one is not provided. |
| `accrueCharge` | `boolean \| undefined` | Optional | If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately. Defaults to the site setting if one is not provided. |
| `downgradeCredit` | [`CreditType1Enum \| undefined`](../../doc/models/credit-type-1-enum.md) | Optional | The type of credit to be created if the change in cost is a downgrade. Defaults to the component and then site setting if one is not provided. |
| `upgradeCharge` | [`CreditType1Enum \| undefined`](../../doc/models/credit-type-1-enum.md) | Optional | The type of charge to be created if the change in cost is an upgrade. Defaults to the component and then site setting if one is not provided. |
| `pricePointId` | [`CreateAllocationPricePointId \| null \| undefined`](../../doc/models/containers/create-allocation-price-point-id.md) | Optional | This is a container for one-of cases. |

## Example (as JSON)

```json
{
  "quantity": 216,
  "component_id": 192,
  "memo": "memo4",
  "proration_downgrade_scheme": "proration_downgrade_scheme2",
  "proration_upgrade_scheme": "proration_upgrade_scheme4",
  "accrue_charge": false
}
```

