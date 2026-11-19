
# Clone Component Price Point Request

## Structure

`CloneComponentPricePointRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | [`CloneComponentPricePoint`](../../doc/models/clone-component-price-point.md) | Required | - |

## Example

```ts
import {
  CloneComponentPricePointRequest,
  EntitlementPeriodicityUnit,
  GrantExpirationUnit,
} from '@maxio-com/advanced-billing-sdk';

const cloneComponentPricePointRequest: CloneComponentPricePointRequest = {
  pricePoint: {
    name: 'name0',
    handle: 'handle6',
    featureCatalogItems: [
      {
        featureTemplateId: 8,
        value: 'value4',
        periodicityInterval: 136,
        periodicityUnit: EntitlementPeriodicityUnit.Hour,
        grantExpirationInterval: 60,
        grantExpirationUnit: GrantExpirationUnit.Month,
      },
      {
        featureTemplateId: 8,
        value: 'value4',
        periodicityInterval: 136,
        periodicityUnit: EntitlementPeriodicityUnit.Hour,
        grantExpirationInterval: 60,
        grantExpirationUnit: GrantExpirationUnit.Month,
      },
      {
        featureTemplateId: 8,
        value: 'value4',
        periodicityInterval: 136,
        periodicityUnit: EntitlementPeriodicityUnit.Hour,
        grantExpirationInterval: 60,
        grantExpirationUnit: GrantExpirationUnit.Month,
      }
    ],
  },
};
```

