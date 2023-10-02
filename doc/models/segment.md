
# Segment

## Structure

`Segment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `componentId` | `number \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |
| `eventBasedBillingMetricId` | `number \| undefined` | Optional | - |
| `pricingScheme` | `string \| undefined` | Optional | - |
| `segmentProperty1Value` | [`SegmentSegmentProperty1Value \| undefined`](../../doc/models/containers/segment-segment-property-1-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty2Value` | [`SegmentSegmentProperty2Value \| undefined`](../../doc/models/containers/segment-segment-property-2-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty3Value` | [`SegmentSegmentProperty3Value \| undefined`](../../doc/models/containers/segment-segment-property-3-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty4Value` | [`SegmentSegmentProperty4Value \| undefined`](../../doc/models/containers/segment-segment-property-4-value.md) | Optional | This is a container for one-of cases. |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `prices` | [`SegmentPrice[] \| undefined`](../../doc/models/segment-price.md) | Optional | **Constraints**: *Minimum Items*: `1` |

## Example (as JSON)

```json
{
  "id": 6,
  "component_id": 116,
  "price_point_id": 140,
  "event_based_billing_metric_id": 200,
  "pricing_scheme": "pricing_scheme0"
}
```

