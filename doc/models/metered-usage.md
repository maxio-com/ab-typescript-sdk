
# Metered Usage

## Structure

`MeteredUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `previousUnitBalance` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `newUnitBalance` | [`MeteredUsageNewUnitBalance`](../../doc/models/containers/metered-usage-new-unit-balance.md) | Required | This is a container for one-of cases. |
| `usageQuantity` | `number` | Required | - |
| `componentId` | `number` | Required | - |
| `componentHandle` | `string` | Required | - |
| `memo` | `string` | Required | - |

## Example

```ts
import { MeteredUsage } from '@maxio-com/advanced-billing-sdk';

const meteredUsage: MeteredUsage = {
  previousUnitBalance: 'previous_unit_balance6',
  newUnitBalance: 66,
  usageQuantity: 106,
  componentId: 68,
  componentHandle: 'component_handle0',
  memo: 'memo4',
};
```

