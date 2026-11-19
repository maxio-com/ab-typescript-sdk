
# Clone Feature Catalog Item

A feature to put on the cloned price point. Requires Entitlements to be enabled for the site; ignored otherwise.

Unlike Create Feature Catalog Item, nothing falls back to the feature template's defaults: send `value`, and for a `usage_limit` feature its periodicity (and any grant expiration) explicitly. If any item can't be applied, for example a missing `value`, a `usage_limit` item without periodicity, or an archived or unknown feature template, the whole clone fails with `422` and nothing is created.

## Structure

`CloneFeatureCatalogItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `featureTemplateId` | `number` | Required | - |
| `value` | `string` | Required | - |
| `periodicityInterval` | `number \| null \| undefined` | Optional | Required for `usage_limit` features; must be omitted for other kinds. |
| `periodicityUnit` | [`EntitlementPeriodicityUnit \| null \| undefined`](../../doc/models/entitlement-periodicity-unit.md) | Optional | Required for `usage_limit` features; must be omitted for other kinds. |
| `grantExpirationInterval` | `number \| null \| undefined` | Optional | `usage_limit` features only. A positive number of `grant_expiration_unit`s; required with `day` or `month`, and must be omitted with `until_next_refill`. |
| `grantExpirationUnit` | [`GrantExpirationUnit \| null \| undefined`](../../doc/models/grant-expiration-unit.md) | Optional | `usage_limit` features only. |

## Example

```ts
import {
  CloneFeatureCatalogItem,
  EntitlementPeriodicityUnit,
  GrantExpirationUnit,
} from '@maxio-com/advanced-billing-sdk';

const cloneFeatureCatalogItem: CloneFeatureCatalogItem = {
  featureTemplateId: 212,
  value: 'value6',
  periodicityInterval: 84,
  periodicityUnit: EntitlementPeriodicityUnit.Week,
  grantExpirationInterval: 8,
  grantExpirationUnit: GrantExpirationUnit.UntilNextRefill,
};
```

