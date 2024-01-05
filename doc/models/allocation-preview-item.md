
# Allocation Preview Item

## Structure

`AllocationPreviewItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number \| undefined` | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `quantity` | [`AllocationPreviewItemQuantity \| undefined`](../../doc/models/containers/allocation-preview-item-quantity.md) | Optional | This is a container for one-of cases. |
| `previousQuantity` | [`AllocationPreviewItemPreviousQuantity \| undefined`](../../doc/models/containers/allocation-preview-item-previous-quantity.md) | Optional | This is a container for one-of cases. |
| `memo` | `string \| null \| undefined` | Optional | - |
| `timestamp` | `string \| null \| undefined` | Optional | - |
| `prorationUpgradeScheme` | `string \| undefined` | Optional | - |
| `prorationDowngradeScheme` | `string \| undefined` | Optional | - |
| `accrueCharge` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `downgradeCredit` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `pricePointId` | `number \| undefined` | Optional | - |
| `previousPricePointId` | `number \| undefined` | Optional | - |
| `pricePointHandle` | `string \| undefined` | Optional | - |
| `pricePointName` | `string \| undefined` | Optional | - |
| `componentHandle` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "component_id": 54,
  "subscription_id": 54,
  "quantity": 78,
  "previous_quantity": 192,
  "memo": "memo6"
}
```

