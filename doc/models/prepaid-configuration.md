
# Prepaid Configuration

## Structure

`PrepaidConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `initialFundingAmountInCents` | `bigint \| undefined` | Optional | - |
| `replenishToAmountInCents` | `bigint \| undefined` | Optional | - |
| `autoReplenish` | `boolean \| undefined` | Optional | - |
| `replenishThresholdAmountInCents` | `bigint \| undefined` | Optional | - |

## Example

```ts
import { PrepaidConfiguration } from '@maxio-com/advanced-billing-sdk';

const prepaidConfiguration: PrepaidConfiguration = {
  id: 146,
  initialFundingAmountInCents: BigInt(78),
  replenishToAmountInCents: BigInt(80),
  autoReplenish: false,
  replenishThresholdAmountInCents: BigInt(232),
};
```

