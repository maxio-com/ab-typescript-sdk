
# Prepaid Usage

## Structure

`PrepaidUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `previousUnitBalance` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `previousOverageUnitBalance` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `newUnitBalance` | [`PrepaidUsageNewUnitBalance`](../../doc/models/containers/prepaid-usage-new-unit-balance.md) | Required | This is a container for one-of cases. |
| `newOverageUnitBalance` | [`PrepaidUsageNewOverageUnitBalance`](../../doc/models/containers/prepaid-usage-new-overage-unit-balance.md) | Required | This is a container for one-of cases. |
| `usageQuantity` | `number` | Required | - |
| `overageUsageQuantity` | `number` | Required | - |
| `componentId` | `number` | Required | - |
| `componentHandle` | `string` | Required | - |
| `memo` | `string` | Required | - |
| `allocationDetails` | [`PrepaidUsageAllocationDetail[]`](../../doc/models/prepaid-usage-allocation-detail.md) | Required | - |

## Example

```ts
import { PrepaidUsage } from '@maxio-com/advanced-billing-sdk';

const prepaidUsage: PrepaidUsage = {
  previousUnitBalance: 'previous_unit_balance4',
  previousOverageUnitBalance: 'previous_overage_unit_balance0',
  newUnitBalance: 206,
  newOverageUnitBalance: 78,
  usageQuantity: 246,
  overageUsageQuantity: 138,
  componentId: 208,
  componentHandle: 'component_handle0',
  memo: 'memo4',
  allocationDetails: [
    {
      allocationId: 18,
      chargeId: 84,
      usageQuantity: 10,
    }
  ],
};
```

