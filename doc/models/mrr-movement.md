
# MRR Movement

## Structure

`MRRMovement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | - |
| `category` | `string \| undefined` | Optional | - |
| `subscriberDelta` | `number \| undefined` | Optional | - |
| `leadDelta` | `number \| undefined` | Optional | - |

## Example

```ts
import { MRRMovement } from '@maxio-com/advanced-billing-sdk';

const mRRMovement: MRRMovement = {
  amount: 116,
  category: 'category4',
  subscriberDelta: 100,
  leadDelta: 128,
};
```

