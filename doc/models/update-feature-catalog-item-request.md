
# Update Feature Catalog Item Request

## Structure

`UpdateFeatureCatalogItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feature` | [`Feature3`](../../doc/models/feature-3.md) | Required | - |

## Example

```ts
import {
  EntitlementPeriodicityUnit,
  UpdateFeatureCatalogItemRequest,
} from '@maxio-com/advanced-billing-sdk';

const updateFeatureCatalogItemRequest: UpdateFeatureCatalogItemRequest = {
  feature: {
    value: 'value6',
    periodicityInterval: 68,
    periodicityUnit: EntitlementPeriodicityUnit.Week,
    propagateToSubscriptions: false,
  },
};
```

