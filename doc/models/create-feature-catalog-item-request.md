
# Create Feature Catalog Item Request

The owning product or component is taken from the URL and must not be included in the request body.

## Structure

`CreateFeatureCatalogItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feature` | [`Feature2`](../../doc/models/feature-2.md) | Required | - |

## Example

```ts
import {
  CreateFeatureCatalogItemRequest,
  EntitlementPeriodicityUnit,
  FeatureOwnerPricePointType,
} from '@maxio-com/advanced-billing-sdk';

const createFeatureCatalogItemRequest: CreateFeatureCatalogItemRequest = {
  feature: {
    featureTemplateId: 196,
    value: 'value6',
    periodicityInterval: 68,
    periodicityUnit: EntitlementPeriodicityUnit.Week,
    pricePointType: FeatureOwnerPricePointType.ProductPricePoint,
    pricePointId: 84,
    propagateToSubscriptions: false,
  },
};
```

