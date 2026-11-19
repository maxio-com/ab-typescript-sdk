
# Feature 3

## Structure

`Feature3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `string \| undefined` | Optional | - |
| `periodicityInterval` | `number \| null \| undefined` | Optional | - |
| `periodicityUnit` | [`EntitlementPeriodicityUnit \| null \| undefined`](../../doc/models/entitlement-periodicity-unit.md) | Optional | - |
| `propagateToSubscriptions` | `boolean \| undefined` | Optional | When `true`, existing subscriptions on the item's price point are updated with the new `value`/periodicity by a background job shortly after. Has no effect on a product/component-level item. When `false` (default) and the item's price point already has subscribers, the update is made on a clone of the price point instead, and existing subscribers are unaffected.<br><br>**Default**: `false` |

## Example

```ts
import {
  EntitlementPeriodicityUnit,
  Feature3,
} from '@maxio-com/advanced-billing-sdk';

const feature3: Feature3 = {
  value: 'value0',
  periodicityInterval: 222,
  periodicityUnit: EntitlementPeriodicityUnit.Day,
  propagateToSubscriptions: false,
};
```

