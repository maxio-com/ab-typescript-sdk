
# Scheduled Renewal Configuration Response

## Structure

`ScheduledRenewalConfigurationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scheduledRenewalConfiguration` | [`ScheduledRenewalConfiguration \| undefined`](../../doc/models/scheduled-renewal-configuration.md) | Optional | - |

## Example

```ts
import {
  ScheduledRenewalConfigurationResponse,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalConfigurationResponse: ScheduledRenewalConfigurationResponse = {
  scheduledRenewalConfiguration: {
    id: 134,
    siteId: 60,
    subscriptionId: 244,
    startsAt: '2016-03-13T12:52:32.123Z',
    endsAt: '2016-03-13T12:52:32.123Z',
  },
};
```

