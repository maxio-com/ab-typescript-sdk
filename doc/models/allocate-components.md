
# Allocate Components

## Structure

`AllocateComponents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prorationUpgradeScheme` | `string \| undefined` | Optional | - |
| `prorationDowngradeScheme` | `string \| undefined` | Optional | - |
| `allocations` | [`CreateAllocation[] \| undefined`](../../doc/models/create-allocation.md) | Optional | - |
| `accrueCharge` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `downgradeCredit` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `paymentCollectionMethod` | [`CollectionMethod \| undefined`](../../doc/models/collection-method.md) | Optional | (Optional) If not passed, the allocation(s) will use the payment collection method on the subscription |
| `initiateDunning` | `boolean \| undefined` | Optional | If true, if the immediate component payment fails, initiate dunning for the subscription.<br>Otherwise, leave the charges on the subscription to pay for at renewal. |

## Example (as JSON)

```json
{
  "proration_upgrade_scheme": "proration_upgrade_scheme2",
  "proration_downgrade_scheme": "proration_downgrade_scheme0",
  "allocations": [
    {
      "quantity": 26.48,
      "component_id": 242,
      "memo": "memo6",
      "proration_downgrade_scheme": "proration_downgrade_scheme0",
      "proration_upgrade_scheme": "proration_upgrade_scheme2",
      "accrue_charge": false
    },
    {
      "quantity": 26.48,
      "component_id": 242,
      "memo": "memo6",
      "proration_downgrade_scheme": "proration_downgrade_scheme0",
      "proration_upgrade_scheme": "proration_upgrade_scheme2",
      "accrue_charge": false
    }
  ],
  "accrue_charge": false,
  "upgrade_charge": "full"
}
```

