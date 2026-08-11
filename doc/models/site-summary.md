
# Site Summary

## Structure

`SiteSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sellerName` | `string \| undefined` | Optional | - |
| `siteName` | `string \| undefined` | Optional | - |
| `siteId` | `number \| undefined` | Optional | - |
| `siteCurrency` | `string \| undefined` | Optional | - |
| `stats` | [`SiteStatistics \| undefined`](../../doc/models/site-statistics.md) | Optional | - |

## Example

```ts
import { SiteSummary } from '@maxio-com/advanced-billing-sdk';

const siteSummary: SiteSummary = {
  sellerName: 'seller_name4',
  siteName: 'site_name8',
  siteId: 252,
  siteCurrency: 'site_currency0',
  stats: {
    totalSubscriptions: 110,
    subscriptionsToday: 228,
    totalRevenue: 'total_revenue6',
    revenueToday: 'revenue_today4',
    revenueThisMonth: 'revenue_this_month4',
  },
};
```

