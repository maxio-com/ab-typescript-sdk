
# Dunner Data

## Structure

`DunnerData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `state` | `string` | Required | - |
| `subscriptionId` | `number` | Required | - |
| `revenueAtRiskInCents` | `bigint` | Required | - |
| `createdAt` | `string` | Required | - |
| `attempts` | `number` | Required | - |
| `lastAttemptedAt` | `string` | Required | - |

## Example

```ts
import { DunnerData } from '@maxio-com/advanced-billing-sdk';

const dunnerData: DunnerData = {
  state: 'state4',
  subscriptionId: 230,
  revenueAtRiskInCents: BigInt(134),
  createdAt: '2016-03-13T12:52:32.123Z',
  attempts: 6,
  lastAttemptedAt: '2016-03-13T12:52:32.123Z',
};
```

