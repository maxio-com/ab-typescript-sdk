
# Update Feature Template Request

## Structure

`UpdateFeatureTemplateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feature` | [`Feature1`](../../doc/models/feature-1.md) | Required | `key` cannot be changed once set. `kind` cannot be changed once any feature catalog item has been created from this template. |

## Example

```ts
import {
  FeatureValueType,
  UpdateFeatureTemplateRequest,
} from '@maxio-com/advanced-billing-sdk';

const updateFeatureTemplateRequest: UpdateFeatureTemplateRequest = {
  feature: {
    name: 'name4',
    description: 'description4',
    unit: 'unit2',
    valueType: FeatureValueType.Boolean,
    defaultValue: 'default_value4',
  },
};
```

