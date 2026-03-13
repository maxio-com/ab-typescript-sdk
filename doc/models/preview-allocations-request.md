
# Preview Allocations Request

## Structure

`PreviewAllocationsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allocations` | [`CreateAllocation[]`](../../doc/models/create-allocation.md) | Required | - |
| `effectiveProrationDate` | `string \| undefined` | Optional | To calculate proration amounts for a future time. Only within a current subscription period. Only ISO8601 format is supported. |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. |
| `downgradeCredit` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. |

## Example (as JSON)

```json
{
  "allocations": [
    {
      "quantity": 26.48,
      "decimal_quantity": "decimal_quantity8",
      "previous_quantity": 55.5,
      "decimal_previous_quantity": "decimal_previous_quantity2",
      "component_id": 242,
      "memo": "memo6"
    }
  ],
  "effective_proration_date": "2023-12-01",
  "upgrade_charge": "none",
  "downgrade_credit": "prorated"
}
```

