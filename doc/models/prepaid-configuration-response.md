
# Prepaid Configuration Response

## Structure

`PrepaidConfigurationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepaidConfiguration` | [`PrepaidConfiguration`](../../doc/models/prepaid-configuration.md) | Required | - |

## Example

```ts
import {
  PrepaidConfigurationResponse,
} from '@maxio-com/advanced-billing-sdk';

const prepaidConfigurationResponse: PrepaidConfigurationResponse = {
  prepaidConfiguration: {
    id: 142,
    initialFundingAmountInCents: BigInt(74),
    replenishToAmountInCents: BigInt(76),
    autoReplenish: false,
    replenishThresholdAmountInCents: BigInt(20),
  },
};
```

