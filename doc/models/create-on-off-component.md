
# Create On Off Component

## Structure

`CreateOnOffComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onOffComponent` | [`OnOffComponent`](../../doc/models/on-off-component.md) | Required | - |

## Example

```ts
import {
  CreateOnOffComponent,
  CreditType,
} from '@maxio-com/advanced-billing-sdk';

const createOnOffComponent: CreateOnOffComponent = {
  onOffComponent: {
    name: 'name6',
    unitPrice: 'String5',
    description: 'description6',
    handle: 'handle2',
    taxable: false,
    upgradeCharge: CreditType.Full,
    downgradeCredit: CreditType.Full,
  },
};
```

