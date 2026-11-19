
# Feature Catalog Item Response

## Structure

`FeatureCatalogItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feature` | [`FeatureCatalogItem`](../../doc/models/feature-catalog-item.md) | Required | A feature template attached to a specific product or component (or one of their price points), with a concrete value. When a subscriber signs up for or is assigned this product/component, the feature catalog item is provisioned as an entitlement on their subscription. |

## Example

```ts
import {
  FeatureCatalogItemResponse,
  FeatureKind,
} from '@maxio-com/advanced-billing-sdk';

const featureCatalogItemResponse: FeatureCatalogItemResponse = {
  feature: {
    id: 206,
    featureTemplateId: 196,
    featureKey: 'feature_key2',
    featureName: 'feature_name6',
    featureKind: FeatureKind.ServiceRight,
  },
};
```

