
# Aggregated Entitlement Periodicity

## Structure

`AggregatedEntitlementPeriodicity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `interval` | `number \| undefined` | Optional | - |
| `unit` | [`EntitlementPeriodicityUnit \| undefined`](../../doc/models/entitlement-periodicity-unit.md) | Optional | The recurring window over which a `usage_limit` feature's allowance resets. |

## Example

```ts
import {
  AggregatedEntitlementPeriodicity,
  EntitlementPeriodicityUnit,
} from '@maxio-com/advanced-billing-sdk';

const aggregatedEntitlementPeriodicity: AggregatedEntitlementPeriodicity = {
  interval: 128,
  unit: EntitlementPeriodicityUnit.Year,
};
```

