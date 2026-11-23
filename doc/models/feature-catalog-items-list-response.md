
# Feature Catalog Items List Response

## Structure

`FeatureCatalogItemsListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `features` | [`FeatureCatalogItem[]`](../../doc/models/feature-catalog-item.md) | Required | - |
| `subscriptionsCount` | `number` | Required | The number of subscriptions on this product/component that would be affected if a feature catalog item change were propagated with `propagate_to_subscriptions=true`. |

## Example

```ts
import {
  FeatureCatalogItemsListResponse,
  FeatureKind,
} from '@maxio-com/advanced-billing-sdk';

const featureCatalogItemsListResponse: FeatureCatalogItemsListResponse = {
  features: [
    {
      id: 174,
      featureTemplateId: 164,
      featureKey: 'feature_key2',
      featureName: 'feature_name6',
      featureKind: FeatureKind.AccessRight,
    }
  ],
  subscriptionsCount: 22,
};
```

