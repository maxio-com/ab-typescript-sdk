
# Allocation

## Structure

`Allocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number \| undefined` | Optional | The integer component ID for the allocation. This references a component that you have created in your Product setup |
| `subscriptionId` | `number \| undefined` | Optional | The integer subscription ID for the allocation. This references a unique subscription in your Site |
| `quantity` | `number \| undefined` | Optional | The allocated quantity set in to effect by the allocation |
| `previousQuantity` | `number \| undefined` | Optional | The allocated quantity that was in effect before this allocation was created |
| `memo` | `string \| null \| undefined` | Optional | The memo passed when the allocation was created |
| `timestamp` | `string \| undefined` | Optional | The time that the allocation was recorded, in  format and UTC timezone, i.e. 2012-11-20T22:00:37Z |
| `prorationUpgradeScheme` | `string \| undefined` | Optional | The scheme used if the proration was an upgrade. This is only present when the allocation was created mid-period. |
| `prorationDowngradeScheme` | `string \| undefined` | Optional | The scheme used if the proration was a downgrade. This is only present when the allocation was created mid-period. |
| `pricePointId` | `number \| undefined` | Optional | - |
| `pricePointName` | `string \| undefined` | Optional | - |
| `pricePointHandle` | `string \| undefined` | Optional | - |
| `previousPricePointId` | `number \| undefined` | Optional | - |
| `accrueCharge` | `boolean \| undefined` | Optional | If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately. |
| `upgradeCharge` | `string \| undefined` | Optional | The type of charge to be created if the change in cost is an upgrade. |
| `downgradeCredit` | `string \| undefined` | Optional | The type of credit to be created if the change in cost is a downgrade. |
| `payment` | [`AllocationPayment2 \| null \| undefined`](../../doc/models/containers/allocation-payment-2.md) | Optional | This is a container for one-of cases. |

## Example (as JSON)

```json
{
  "component_id": 144,
  "subscription_id": 144,
  "quantity": 246,
  "previous_quantity": 180,
  "memo": "memo4"
}
```

