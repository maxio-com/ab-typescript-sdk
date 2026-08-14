
# Allocation Settings

## Structure

`AllocationSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. |
| `downgradeCredit` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. |
| `accrueCharge` | `string \| undefined` | Optional | Either "true" or "false". |

## Example

```ts
import {
  AllocationSettings,
  CreditType,
} from '@maxio-com/advanced-billing-sdk';

const allocationSettings: AllocationSettings = {
  upgradeCharge: CreditType.Prorated,
  downgradeCredit: CreditType.Prorated,
  accrueCharge: 'accrue_charge2',
};
```

