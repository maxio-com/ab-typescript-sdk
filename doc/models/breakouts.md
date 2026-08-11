
# Breakouts

## Structure

`Breakouts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planAmountInCents` | `bigint \| undefined` | Optional | - |
| `planAmountFormatted` | `string \| undefined` | Optional | - |
| `usageAmountInCents` | `bigint \| undefined` | Optional | - |
| `usageAmountFormatted` | `string \| undefined` | Optional | - |

## Example

```ts
import { Breakouts } from '@maxio-com/advanced-billing-sdk';

const breakouts: Breakouts = {
  planAmountInCents: BigInt(254),
  planAmountFormatted: 'plan_amount_formatted0',
  usageAmountInCents: BigInt(106),
  usageAmountFormatted: 'usage_amount_formatted8',
};
```

