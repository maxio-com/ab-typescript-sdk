
# Upsert Prepaid Configuration

## Structure

`UpsertPrepaidConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `initialFundingAmountInCents` | `bigint \| undefined` | Optional | - |
| `replenishToAmountInCents` | `bigint \| undefined` | Optional | - |
| `autoReplenish` | `boolean \| undefined` | Optional | - |
| `replenishThresholdAmountInCents` | `bigint \| undefined` | Optional | - |

## Example

```ts
import { UpsertPrepaidConfiguration } from '@maxio-com/advanced-billing-sdk';

const upsertPrepaidConfiguration: UpsertPrepaidConfiguration = {
  initialFundingAmountInCents: BigInt(244),
  replenishToAmountInCents: BigInt(246),
  autoReplenish: false,
  replenishThresholdAmountInCents: BigInt(190),
};
```

