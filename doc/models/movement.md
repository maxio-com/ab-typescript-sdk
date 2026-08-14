
# Movement

## Structure

`Movement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timestamp` | `string \| undefined` | Optional | - |
| `amountInCents` | `bigint \| undefined` | Optional | - |
| `amountFormatted` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `category` | `string \| undefined` | Optional | - |
| `breakouts` | [`Breakouts \| undefined`](../../doc/models/breakouts.md) | Optional | - |
| `lineItems` | [`MovementLineItem[] \| undefined`](../../doc/models/movement-line-item.md) | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `subscriberName` | `string \| undefined` | Optional | - |

## Example

```ts
import { Movement } from '@maxio-com/advanced-billing-sdk';

const movement: Movement = {
  timestamp: '2016-03-13T12:52:32.123Z',
  amountInCents: BigInt(34),
  amountFormatted: 'amount_formatted6',
  description: 'description4',
  category: 'category2',
};
```

