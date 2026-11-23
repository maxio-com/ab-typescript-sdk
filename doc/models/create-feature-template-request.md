
# Create Feature Template Request

## Structure

`CreateFeatureTemplateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feature` | [`Feature`](../../doc/models/feature.md) | Required | - |

## Example

```ts
import {
  CreateFeatureTemplateRequest,
  FeatureKind,
  FeatureValueType,
} from '@maxio-com/advanced-billing-sdk';

const createFeatureTemplateRequest: CreateFeatureTemplateRequest = {
  feature: {
    key: 'sso',
    name: 'name4',
    kind: FeatureKind.UsageLimit,
    description: 'description4',
    unit: 'unit2',
    valueType: FeatureValueType.Boolean,
    defaultValue: 'default_value4',
    defaultPeriodicityInterval: 150,
  },
};
```

