
# Entitlement Periodicity Unit

The recurring window over which a `usage_limit` feature's allowance resets.

## Enumeration

`EntitlementPeriodicityUnit`

## Fields

| Name |
|  --- |
| `Hour` |
| `Day` |
| `Week` |
| `Month` |
| `Year` |

## Example

```ts
import { EntitlementPeriodicityUnit } from '@maxio-com/advanced-billing-sdk';

const entitlementPeriodicityUnit = EntitlementPeriodicityUnit.Month;
```

