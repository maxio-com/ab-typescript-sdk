
# Allocation Preview Response

## Structure

`AllocationPreviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allocationPreview` | [`AllocationPreview`](../../doc/models/allocation-preview.md) | Required | - |

## Example

```ts
import { AllocationPreviewResponse } from '@maxio-com/advanced-billing-sdk';

const allocationPreviewResponse: AllocationPreviewResponse = {
  allocationPreview: {
    startDate: '2016-03-13T12:52:32.123Z',
    endDate: '2016-03-13T12:52:32.123Z',
    subtotalInCents: BigInt(240),
    totalTaxInCents: BigInt(108),
    totalDiscountInCents: BigInt(142),
  },
};
```

