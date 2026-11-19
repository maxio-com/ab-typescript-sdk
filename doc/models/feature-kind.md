
# Feature Kind

The behavior of a feature:

- `access_right`: a boolean entitlement. A subscriber either has access or does not.
- `usage_limit`: a quantified allowance measured over a recurring period (for example, "10,000 API calls per month").
- `service_right`: a free-form value (text, boolean, or number) that isn't a simple access flag or a metered limit.

## Enumeration

`FeatureKind`

## Fields

| Name |
|  --- |
| `AccessRight` |
| `UsageLimit` |
| `ServiceRight` |

## Example

```ts
import { FeatureKind } from '@maxio-com/advanced-billing-sdk';

const featureKind = FeatureKind.UsageLimit;
```

