
# Feature Template Response

## Structure

`FeatureTemplateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feature` | [`FeatureTemplate`](../../doc/models/feature-template.md) | Required | A feature that can be granted to subscribers, defined once at the site level and then attached to products or components. |

## Example

```ts
import {
  FeatureKind,
  FeatureTemplateResponse,
} from '@maxio-com/advanced-billing-sdk';

const featureTemplateResponse: FeatureTemplateResponse = {
  feature: {
    id: 206,
    key: 'sso',
    name: 'Single Sign-On',
    description: 'description4',
    kind: FeatureKind.UsageLimit,
  },
};
```

