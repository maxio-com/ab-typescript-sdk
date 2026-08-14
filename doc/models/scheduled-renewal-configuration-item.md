
# Scheduled Renewal Configuration Item

## Structure

`ScheduledRenewalConfigurationItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `subscriptionRenewalConfigurationId` | `number \| undefined` | Optional | - |
| `itemId` | `number \| undefined` | Optional | - |
| `itemType` | `string \| undefined` | Optional | - |
| `itemSubclass` | `string \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |
| `pricePointType` | `string \| undefined` | Optional | - |
| `quantity` | `number \| undefined` | Optional | - |
| `decimalQuantity` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |

## Example

```ts
import {
  ScheduledRenewalConfigurationItem,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalConfigurationItem: ScheduledRenewalConfigurationItem = {
  id: 54,
  subscriptionId: 164,
  subscriptionRenewalConfigurationId: 64,
  itemId: 202,
  itemType: 'item_type0',
};
```

