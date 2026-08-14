
# Scheduled Renewal Configuration Item Response

## Structure

`ScheduledRenewalConfigurationItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scheduledRenewalConfigurationItem` | [`ScheduledRenewalConfigurationItem \| undefined`](../../doc/models/scheduled-renewal-configuration-item.md) | Optional | - |

## Example

```ts
import {
  ScheduledRenewalConfigurationItemResponse,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalConfigurationItemResponse: ScheduledRenewalConfigurationItemResponse = {
  scheduledRenewalConfigurationItem: {
    id: 98,
    subscriptionId: 208,
    subscriptionRenewalConfigurationId: 108,
    itemId: 246,
    itemType: 'item_type2',
  },
};
```

