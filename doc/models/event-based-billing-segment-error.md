
# Event Based Billing Segment Error

## Structure

`EventBasedBillingSegmentError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segments` | `Record<string, unknown>` | Required | The key of the object would be a number (an index in the request array) where the error occurred. In the value object, the key represents the field and the value is an array with error messages. In most cases, this object would contain just one key. |

## Example

```ts
import {
  EventBasedBillingSegmentError,
} from '@maxio-com/advanced-billing-sdk';

const eventBasedBillingSegmentError: EventBasedBillingSegmentError = {
  segments: {
    'key0': { 'key1': 'val1', 'key2': 'val2' },
    'key1': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

