
# Site Statistics

## Structure

`SiteStatistics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalSubscriptions` | `number \| undefined` | Optional | - |
| `subscriptionsToday` | `number \| undefined` | Optional | - |
| `totalRevenue` | `string \| undefined` | Optional | - |
| `revenueToday` | `string \| undefined` | Optional | - |
| `revenueThisMonth` | `string \| undefined` | Optional | - |
| `revenueThisYear` | `string \| undefined` | Optional | - |
| `totalCanceledSubscriptions` | `number \| undefined` | Optional | - |
| `totalActiveSubscriptions` | `number \| undefined` | Optional | - |
| `totalPastDueSubscriptions` | `number \| undefined` | Optional | - |
| `totalUnpaidSubscriptions` | `number \| undefined` | Optional | - |
| `totalDunningSubscriptions` | `number \| undefined` | Optional | - |

## Example

```ts
import { SiteStatistics } from '@maxio-com/advanced-billing-sdk';

const siteStatistics: SiteStatistics = {
  totalSubscriptions: 168,
  subscriptionsToday: 170,
  totalRevenue: 'total_revenue2',
  revenueToday: 'revenue_today0',
  revenueThisMonth: 'revenue_this_month0',
};
```

