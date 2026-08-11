
# Renewal Preview Response

## Structure

`RenewalPreviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `renewalPreview` | [`RenewalPreview`](../../doc/models/renewal-preview.md) | Required | - |

## Example

```ts
import { RenewalPreviewResponse } from '@maxio-com/advanced-billing-sdk';

const renewalPreviewResponse: RenewalPreviewResponse = {
  renewalPreview: {
    nextAssessmentAt: '2016-03-13T12:52:32.123Z',
    subtotalInCents: BigInt(132),
    totalTaxInCents: BigInt(0),
    totalDiscountInCents: BigInt(250),
    totalInCents: BigInt(20),
  },
};
```

