
# Feature Catalog Item

A feature template attached to a specific product or component (or one of their price points), with a concrete value. When a subscriber signs up for or is assigned this product/component, the feature catalog item is provisioned as an entitlement on their subscription.

## Structure

`FeatureCatalogItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `featureTemplateId` | `number \| undefined` | Optional | The id of the feature template this item was created from. |
| `featureKey` | `string \| undefined` | Optional | The `key` of the parent feature template. |
| `featureName` | `string \| undefined` | Optional | The `name` of the parent feature template. |
| `featureKind` | [`FeatureKind \| undefined`](../../doc/models/feature-kind.md) | Optional | The behavior of a feature:<br><br>- `access_right`: a boolean entitlement. A subscriber either has access or does not.<br>- `usage_limit`: a quantified allowance measured over a recurring period (for example, "10,000 API calls per month").<br>- `service_right`: a free-form value (text, boolean, or number) that isn't a simple access flag or a metered limit. |
| `value` | `string \| undefined` | Optional | The value granted by this feature catalog item. Interpreted according to `feature_kind`: `"true"`/`"false"` for `access_right`, a numeric string for `usage_limit`, or any string for `service_right` (shaped by the feature template's `value_type`). |
| `periodicityInterval` | `number \| null \| undefined` | Optional | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicityUnit` | [`EntitlementPeriodicityUnit \| null \| undefined`](../../doc/models/entitlement-periodicity-unit.md) | Optional | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `pricePointType` | [`FeatureOwnerPricePointType \| null \| undefined`](../../doc/models/feature-owner-price-point-type.md) | Optional | `null` when this feature catalog item applies to every price point of its owning product/component. Set when the feature catalog item is an override for one specific price point. |
| `pricePointId` | `number \| null \| undefined` | Optional | Set together with `price_point_type` for price-point-specific overrides. |
| `archivedAt` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |

## Example

```ts
import {
  FeatureCatalogItem,
  FeatureKind,
} from '@maxio-com/advanced-billing-sdk';

const featureCatalogItem: FeatureCatalogItem = {
  id: 52,
  featureTemplateId: 42,
  featureKey: 'feature_key6',
  featureName: 'feature_name0',
  featureKind: FeatureKind.UsageLimit,
};
```

