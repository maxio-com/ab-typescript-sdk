
# Allocate Components

## Structure

`AllocateComponents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prorationUpgradeScheme` | `string \| undefined` | Optional | **Default**: `'no-prorate'` |
| `prorationDowngradeScheme` | `string \| undefined` | Optional | **Default**: `'no-prorate'` |
| `allocations` | [`CreateAllocationRequest[] \| undefined`](../../doc/models/create-allocation-request.md) | Optional | - |
| `accrueCharge` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | `string \| undefined` | Optional | - |
| `downgradeCredit` | `string \| undefined` | Optional | - |
| `paymentCollectionMethod` | [`PaymentCollectionMethod1 \| undefined`](../../doc/models/payment-collection-method-1.md) | Optional | (Optional) If not passed, the allocation(s) will use the payment collection method on the subscription<br>**Default**: `PaymentCollectionMethod1.Automatic` |

## Example (as JSON)

```json
{
  "proration_upgrade_scheme": "no-prorate",
  "proration_downgrade_scheme": "no-prorate",
  "payment_collection_method": "automatic",
  "allocations": [
    {
      "allocation": {
        "quantity": 228.94,
        "component_id": 8,
        "memo": "memo2",
        "proration_downgrade_scheme": "proration_downgrade_scheme4",
        "proration_upgrade_scheme": "proration_upgrade_scheme6",
        "accrue_charge": false
      }
    },
    {
      "allocation": {
        "quantity": 228.94,
        "component_id": 8,
        "memo": "memo2",
        "proration_downgrade_scheme": "proration_downgrade_scheme4",
        "proration_upgrade_scheme": "proration_upgrade_scheme6",
        "accrue_charge": false
      }
    }
  ],
  "accrue_charge": false,
  "upgrade_charge": "upgrade_charge4"
}
```

