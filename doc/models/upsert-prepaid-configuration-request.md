
# Upsert Prepaid Configuration Request

## Structure

`UpsertPrepaidConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepaidConfiguration` | [`UpsertPrepaidConfiguration`](../../doc/models/upsert-prepaid-configuration.md) | Required | - |

## Example

```ts
import {
  UpsertPrepaidConfigurationRequest,
} from '@maxio-com/advanced-billing-sdk';

const upsertPrepaidConfigurationRequest: UpsertPrepaidConfigurationRequest = {
  prepaidConfiguration: {
    initialFundingAmountInCents: BigInt(74),
    replenishToAmountInCents: BigInt(76),
    autoReplenish: false,
    replenishThresholdAmountInCents: BigInt(20),
  },
};
```

