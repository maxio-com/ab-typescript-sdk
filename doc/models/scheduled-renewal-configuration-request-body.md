
# Scheduled Renewal Configuration Request Body

## Structure

`ScheduledRenewalConfigurationRequestBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startsAt` | `string \| undefined` | Optional | (Optional) Start of the renewal term. |
| `endsAt` | `string \| undefined` | Optional | (Optional) End of the renewal term. |
| `lockInAt` | `string \| undefined` | Optional | (Optional) Lock-in date for the renewal. |
| `contractId` | `number \| undefined` | Optional | (Optional) Existing contract to associate with the scheduled renewal. Contracts must be enabled for your site. |
| `createNewContract` | `boolean \| undefined` | Optional | (Optional) Set to true to create a new contract when contracts are enabled. Contracts must be enabled for your site. |

## Example

```ts
import {
  ScheduledRenewalConfigurationRequestBody,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalConfigurationRequestBody: ScheduledRenewalConfigurationRequestBody = {
  startsAt: '2016-03-13T12:52:32.123Z',
  endsAt: '2016-03-13T12:52:32.123Z',
  lockInAt: '2016-03-13T12:52:32.123Z',
  contractId: 162,
  createNewContract: false,
};
```

