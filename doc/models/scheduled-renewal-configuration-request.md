
# Scheduled Renewal Configuration Request

## Structure

`ScheduledRenewalConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `renewalConfiguration` | [`ScheduledRenewalConfigurationRequestBody`](../../doc/models/scheduled-renewal-configuration-request-body.md) | Required | - |

## Example

```ts
import {
  ScheduledRenewalConfigurationRequest,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalConfigurationRequest: ScheduledRenewalConfigurationRequest = {
  renewalConfiguration: {
    startsAt: '2016-03-13T12:52:32.123Z',
    endsAt: '2016-03-13T12:52:32.123Z',
    lockInAt: '2016-03-13T12:52:32.123Z',
    contractId: 244,
    createNewContract: false,
  },
};
```

