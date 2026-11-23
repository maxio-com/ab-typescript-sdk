
# Feature 1

`key` cannot be changed once set. `kind` cannot be changed once any feature catalog item has been created from this template.

## Structure

`Feature1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `unit` | `string \| null \| undefined` | Optional | - |
| `valueType` | [`FeatureValueType \| undefined`](../../doc/models/feature-value-type.md) | Optional | The data type of a feature's value. For `access_right` features this is always `boolean`, and for `usage_limit` features this is always `numeric`. For `service_right` features, you choose the value type explicitly. |
| `defaultValue` | `string \| null \| undefined` | Optional | - |
| `defaultPeriodicityInterval` | `number \| null \| undefined` | Optional | - |
| `defaultPeriodicityUnit` | [`EntitlementPeriodicityUnit \| null \| undefined`](../../doc/models/entitlement-periodicity-unit.md) | Optional | - |

## Example

```ts
import { Feature1, FeatureValueType } from '@maxio-com/advanced-billing-sdk';

const feature1: Feature1 = {
  name: 'name8',
  description: 'description8',
  unit: 'unit6',
  valueType: FeatureValueType.Text,
  defaultValue: 'default_value8',
};
```

