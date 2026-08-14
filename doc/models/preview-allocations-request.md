
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

## Example

```ts
import {
  CreditType,
  PreviewAllocationsRequest,
} from '@maxio-com/advanced-billing-sdk';

const previewAllocationsRequest: PreviewAllocationsRequest = {
  allocations: [
    {
      quantity: 26.48,
      decimalQuantity: 'decimal_quantity8',
      previousQuantity: 55.5,
      decimalPreviousQuantity: 'decimal_previous_quantity2',
      componentId: 242,
      memo: 'memo6',
    }
  ],
  effectiveProrationDate: '2023-12-01',
  upgradeCharge: CreditType.None,
  downgradeCredit: CreditType.None,
};
```

