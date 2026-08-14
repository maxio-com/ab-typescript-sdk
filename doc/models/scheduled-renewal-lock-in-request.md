
# Scheduled Renewal Lock in Request

## Structure

`ScheduledRenewalLockInRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lockInAt` | `string` | Required | Date to lock in the renewal. |

## Example

```ts
import {
  ScheduledRenewalLockInRequest,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalLockInRequest: ScheduledRenewalLockInRequest = {
  lockInAt: '2016-03-13T12:52:32.123Z',
};
```

