
# Allocate Components

## Structure

`AllocateComponents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prorationUpgradeScheme` | `string \| undefined` | Optional | - |
| `prorationDowngradeScheme` | `string \| undefined` | Optional | - |
| `allocations` | [`CreateAllocation[] \| undefined`](../../doc/models/create-allocation.md) | Optional | - |
| `accrueCharge` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. |
| `downgradeCredit` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. |
| `paymentCollectionMethod` | [`CollectionMethod \| undefined`](../../doc/models/collection-method.md) | Optional | (Optional) If not passed, the allocation(s) will use the payment collection method on the subscription. |
| `initiateDunning` | `boolean \| undefined` | Optional | If true, if the immediate component payment fails, initiate dunning for the subscription.<br>Otherwise, leave the charges on the subscription to pay for at renewal. |

## Example

```ts
import {
  AllocateComponents,
  CreditType,
} from '@maxio-com/advanced-billing-sdk';

const allocateComponents: AllocateComponents = {
  prorationUpgradeScheme: 'proration_upgrade_scheme8',
  prorationDowngradeScheme: 'proration_downgrade_scheme6',
  allocations: [
    {
      quantity: 26.48,
      decimalQuantity: 'decimal_quantity8',
      previousQuantity: 55.5,
      decimalPreviousQuantity: 'decimal_previous_quantity2',
      componentId: 242,
      memo: 'memo6',
    },
    {
      quantity: 26.48,
      decimalQuantity: 'decimal_quantity8',
      previousQuantity: 55.5,
      decimalPreviousQuantity: 'decimal_previous_quantity2',
      componentId: 242,
      memo: 'memo6',
    },
    {
      quantity: 26.48,
      decimalQuantity: 'decimal_quantity8',
      previousQuantity: 55.5,
      decimalPreviousQuantity: 'decimal_previous_quantity2',
      componentId: 242,
      memo: 'memo6',
    }
  ],
  accrueCharge: false,
  upgradeCharge: CreditType.Prorated,
};
```

