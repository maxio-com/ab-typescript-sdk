
# Allocation Preview Item

## Structure

`AllocationPreviewItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number \| undefined` | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `quantity` | [`AllocationPreviewItemQuantity \| undefined`](../../doc/models/containers/allocation-preview-item-quantity.md) | Optional | This is a container for one-of cases. |
| `previousQuantity` | `number \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `timestamp` | `string \| null \| undefined` | Optional | - |
| `prorationUpgradeScheme` | `string \| undefined` | Optional | - |
| `prorationDowngradeScheme` | `string \| undefined` | Optional | - |
| `accrueCharge` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | `string \| undefined` | Optional | - |
| `downgradeCredit` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "component_id": 54,
  "subscription_id": 54,
  "quantity": 159.62,
  "previous_quantity": 14,
  "memo": "memo6"
}
```

