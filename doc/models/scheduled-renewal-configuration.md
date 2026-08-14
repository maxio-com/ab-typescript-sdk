
# Scheduled Renewal Configuration

## Structure

`ScheduledRenewalConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | ID of the renewal. |
| `siteId` | `number \| undefined` | Optional | ID of the site to which the renewal belongs. |
| `subscriptionId` | `number \| undefined` | Optional | The id of the subscription. |
| `startsAt` | `string \| undefined` | Optional | - |
| `endsAt` | `string \| undefined` | Optional | - |
| `lockInAt` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `scheduledRenewalConfigurationItems` | [`ScheduledRenewalConfigurationItem[] \| undefined`](../../doc/models/scheduled-renewal-configuration-item.md) | Optional | - |
| `contract` | [`Contract \| undefined`](../../doc/models/contract.md) | Optional | Contract linked to the scheduled renewal configuration. |

## Example

```ts
import {
  ScheduledRenewalConfiguration,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalConfiguration: ScheduledRenewalConfiguration = {
  id: 8,
  siteId: 190,
  subscriptionId: 118,
  startsAt: '2016-03-13T12:52:32.123Z',
  endsAt: '2016-03-13T12:52:32.123Z',
};
```

