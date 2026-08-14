
# List Segments Response

## Structure

`ListSegmentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segments` | [`Segment[] \| undefined`](../../doc/models/segment.md) | Optional | - |

## Example

```ts
import {
  ListSegmentsResponse,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const listSegmentsResponse: ListSegmentsResponse = {
  segments: [
    {
      id: 50,
      componentId: 160,
      pricePointId: 184,
      eventBasedBillingMetricId: 244,
      pricingScheme: PricingScheme.Stairstep,
    },
    {
      id: 50,
      componentId: 160,
      pricePointId: 184,
      eventBasedBillingMetricId: 244,
      pricingScheme: PricingScheme.Stairstep,
    }
  ],
};
```

