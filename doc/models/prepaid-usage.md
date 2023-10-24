
# Prepaid Usage

## Structure

`PrepaidUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `previousUnitBalance` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `previousOverageUnitBalance` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `newUnitBalance` | `number` | Required | - |
| `newOverageUnitBalance` | `number` | Required | - |
| `usageQuantity` | `number` | Required | - |
| `overageUsageQuantity` | `number` | Required | - |
| `componentId` | `number` | Required | - |
| `componentHandle` | `string` | Required | - |
| `memo` | `string` | Required | - |
| `allocationDetails` | [`PrepaidUsageAllocationDetail[]`](../../doc/models/prepaid-usage-allocation-detail.md) | Required | - |

## Example (as JSON)

```json
{
  "previous_unit_balance": "previous_unit_balance0",
  "previous_overage_unit_balance": "previous_overage_unit_balance4",
  "new_unit_balance": 252,
  "new_overage_unit_balance": 224,
  "usage_quantity": 214,
  "overage_usage_quantity": 106,
  "component_id": 176,
  "component_handle": "component_handle4",
  "memo": "memo8",
  "allocation_details": [
    {
      "allocation_id": 18,
      "charge_id": 84,
      "usage_quantity": 10
    }
  ]
}
```

