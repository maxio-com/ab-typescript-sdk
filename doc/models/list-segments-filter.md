
# List Segments Filter

## Structure

`ListSegmentsFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentProperty1Value` | `string \| undefined` | Optional | The value passed here would be used to filter segments. Pass a value related to `segment_property_1` on attached Metric. If empty string is passed, this filter would be rejected. Use in query `filter[segment_property_1_value]=EU`. |
| `segmentProperty2Value` | `string \| undefined` | Optional | The value passed here would be used to filter segments. Pass a value related to `segment_property_2` on attached Metric. If empty string is passed, this filter would be rejected. |
| `segmentProperty3Value` | `string \| undefined` | Optional | The value passed here would be used to filter segments. Pass a value related to `segment_property_3` on attached Metric. If empty string is passed, this filter would be rejected. |
| `segmentProperty4Value` | `string \| undefined` | Optional | The value passed here would be used to filter segments. Pass a value related to `segment_property_4` on attached Metric. If empty string is passed, this filter would be rejected. |

## Example

```ts
import { ListSegmentsFilter } from '@maxio-com/advanced-billing-sdk';

const listSegmentsFilter: ListSegmentsFilter = {
  segmentProperty1Value: 'EU',
  segmentProperty2Value: 'segment_property_2_value6',
  segmentProperty3Value: 'segment_property_3_value6',
  segmentProperty4Value: 'segment_property_4_value8',
};
```

