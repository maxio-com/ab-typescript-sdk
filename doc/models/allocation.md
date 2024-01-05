
# Allocation

## Structure

`Allocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allocationId` | `number \| undefined` | Optional | The allocation unique id |
| `componentId` | `number \| undefined` | Optional | The integer component ID for the allocation. This references a component that you have created in your Product setup |
| `componentHandle` | `string \| null \| undefined` | Optional | The handle of the component. This references a component that you have created in your Product setup |
| `subscriptionId` | `number \| undefined` | Optional | The integer subscription ID for the allocation. This references a unique subscription in your Site |
| `quantity` | [`AllocationQuantity \| undefined`](../../doc/models/containers/allocation-quantity.md) | Optional | This is a container for one-of cases. |
| `previousQuantity` | [`AllocationPreviousQuantity \| undefined`](../../doc/models/containers/allocation-previous-quantity.md) | Optional | This is a container for one-of cases. |
| `memo` | `string \| null \| undefined` | Optional | The memo passed when the allocation was created |
| `timestamp` | `string \| undefined` | Optional | The time that the allocation was recorded, in format and UTC timezone, i.e. 2012-11-20T22:00:37Z |
| `createdAt` | `string \| undefined` | Optional | Timestamp indicating when this allocation was created |
| `prorationUpgradeScheme` | `string \| undefined` | Optional | The scheme used if the proration was an upgrade. This is only present when the allocation was created mid-period. |
| `prorationDowngradeScheme` | `string \| undefined` | Optional | The scheme used if the proration was a downgrade. This is only present when the allocation was created mid-period. |
| `pricePointId` | `number \| undefined` | Optional | - |
| `pricePointName` | `string \| undefined` | Optional | - |
| `pricePointHandle` | `string \| undefined` | Optional | - |
| `previousPricePointId` | `number \| undefined` | Optional | - |
| `accrueCharge` | `boolean \| undefined` | Optional | If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately. |
| `initiateDunning` | `boolean \| undefined` | Optional | If true, if the immediate component payment fails, initiate dunning for the subscription.<br>Otherwise, leave the charges on the subscription to pay for at renewal. |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `downgradeCredit` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `payment` | [`AllocationPayment \| null \| undefined`](../../doc/models/containers/allocation-payment.md) | Optional | This is a container for one-of cases. |

## Example (as JSON)

```json
{
  "allocation_id": 102,
  "component_id": 144,
  "component_handle": "component_handle0",
  "subscription_id": 144,
  "quantity": 168
}
```

