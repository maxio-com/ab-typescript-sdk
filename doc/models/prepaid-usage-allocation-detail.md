
# Prepaid Usage Allocation Detail

## Structure

`PrepaidUsageAllocationDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allocationId` | `number \| undefined` | Optional | - |
| `chargeId` | `number \| undefined` | Optional | - |
| `usageQuantity` | `number \| undefined` | Optional | - |

## Example

```ts
import {
  PrepaidUsageAllocationDetail,
} from '@maxio-com/advanced-billing-sdk';

const prepaidUsageAllocationDetail: PrepaidUsageAllocationDetail = {
  allocationId: 144,
  chargeId: 214,
  usageQuantity: 140,
};
```

