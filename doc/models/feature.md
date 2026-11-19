
# Feature

## Structure

`Feature`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | A unique, lowercase, underscore-separated identifier for the feature. Immutable once set. |
| `name` | `string` | Required | The display name of the feature. |
| `description` | `string \| null \| undefined` | Optional | - |
| `kind` | [`FeatureKind`](../../doc/models/feature-kind.md) | Required | The behavior of a feature:<br><br>- `access_right`: a boolean entitlement. A subscriber either has access or does not.<br>- `usage_limit`: a quantified allowance measured over a recurring period (for example, "10,000 API calls per month").<br>- `service_right`: a free-form value (text, boolean, or number) that isn't a simple access flag or a metered limit. |
| `unit` | `string \| null \| undefined` | Optional | Required when `kind` is `usage_limit`. |
| `valueType` | [`FeatureValueType \| undefined`](../../doc/models/feature-value-type.md) | Optional | Required when `kind` is `service_right`. Ignored for other kinds, where it is inferred automatically. |
| `defaultValue` | `string \| null \| undefined` | Optional | - |
| `defaultPeriodicityInterval` | `number \| null \| undefined` | Optional | Only valid when `kind` is `usage_limit`. |
| `defaultPeriodicityUnit` | [`EntitlementPeriodicityUnit \| null \| undefined`](../../doc/models/entitlement-periodicity-unit.md) | Optional | Only valid when `kind` is `usage_limit`. Must be set together with `default_periodicity_interval`. |

## Example

```ts
import {
  Feature,
  FeatureKind,
  FeatureValueType,
} from '@maxio-com/advanced-billing-sdk';

const feature: Feature = {
  key: 'sso',
  name: 'name4',
  kind: FeatureKind.UsageLimit,
  description: 'description4',
  unit: 'unit2',
  valueType: FeatureValueType.Boolean,
  defaultValue: 'default_value4',
  defaultPeriodicityInterval: 150,
};
```

