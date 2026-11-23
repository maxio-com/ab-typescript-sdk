
# Clone Component Price Point

## Structure

`CloneComponentPricePoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `handle` | `string \| undefined` | Optional | - |
| `featureCatalogItems` | [`CloneFeatureCatalogItem[] \| undefined`](../../doc/models/clone-feature-catalog-item.md) | Optional | The features the clone gets. The clone does not copy the source price point's features, so send every feature it should have. |

## Example

```ts
import {
  CloneComponentPricePoint,
  EntitlementPeriodicityUnit,
  GrantExpirationUnit,
} from '@maxio-com/advanced-billing-sdk';

const cloneComponentPricePoint: CloneComponentPricePoint = {
  name: 'name4',
  handle: 'handle0',
  featureCatalogItems: [
    {
      featureTemplateId: 8,
      value: 'value4',
      periodicityInterval: 136,
      periodicityUnit: EntitlementPeriodicityUnit.Hour,
      grantExpirationInterval: 60,
      grantExpirationUnit: GrantExpirationUnit.Month,
    }
  ],
};
```

