
# Historic Usage

(Optional) For Event Based Components. If the `include=historic_usages` query param is provided, the last ten billing periods will be returned.

## Structure

`HistoricUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalUsageQuantity` | `number \| undefined` | Optional | Total usage of a component for billing period |
| `billingPeriodStartsAt` | `string \| undefined` | Optional | Start date of billing period |
| `billingPeriodEndsAt` | `string \| undefined` | Optional | End date of billing period |

## Example

```ts
import { HistoricUsage } from '@maxio-com/advanced-billing-sdk';

const historicUsage: HistoricUsage = {
  totalUsageQuantity: 140.74,
  billingPeriodStartsAt: '2016-03-13T12:52:32.123Z',
  billingPeriodEndsAt: '2016-03-13T12:52:32.123Z',
};
```

