
# Event Based Billing Segment Single Error

The key of the object would be a number (an index in the request array) where the error occurred. In the value object, the key represents the field and the value is an array with error messages. In most cases, this object would contain just one key.

## Structure

`EventBasedBillingSegmentSingleError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | `string[]` | Required | - |

## Example

```ts
import {
  EventBasedBillingSegmentSingleError,
} from '@maxio-com/advanced-billing-sdk';

const eventBasedBillingSegmentSingleError: EventBasedBillingSegmentSingleError = {
  pricePoint: [
    'price_point0'
  ],
};
```

