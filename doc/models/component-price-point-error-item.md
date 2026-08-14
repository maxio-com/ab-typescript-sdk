
# Component Price Point Error Item

## Structure

`ComponentPricePointErrorItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number \| undefined` | Optional | - |
| `message` | `string \| undefined` | Optional | - |
| `pricePoint` | `number \| undefined` | Optional | - |

## Example

```ts
import {
  ComponentPricePointErrorItem,
} from '@maxio-com/advanced-billing-sdk';

const componentPricePointErrorItem: ComponentPricePointErrorItem = {
  componentId: 174,
  message: 'message2',
  pricePoint: 72,
};
```

