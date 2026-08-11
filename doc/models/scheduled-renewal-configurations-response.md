
# Scheduled Renewal Configurations Response

## Structure

`ScheduledRenewalConfigurationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scheduledRenewalConfigurations` | [`ScheduledRenewalConfiguration[] \| undefined`](../../doc/models/scheduled-renewal-configuration.md) | Optional | - |

## Example

```ts
import {
  ScheduledRenewalConfigurationsResponse,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalConfigurationsResponse: ScheduledRenewalConfigurationsResponse = {
  scheduledRenewalConfigurations: [
    {
      id: 122,
      siteId: 48,
      subscriptionId: 232,
      startsAt: '2016-03-13T12:52:32.123Z',
      endsAt: '2016-03-13T12:52:32.123Z',
    }
  ],
};
```

