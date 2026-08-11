
# MRR

## Structure

`MRR`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountInCents` | `bigint \| undefined` | Optional | - |
| `amountFormatted` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `currencySymbol` | `string \| undefined` | Optional | - |
| `breakouts` | [`Breakouts \| undefined`](../../doc/models/breakouts.md) | Optional | - |
| `atTime` | `string \| undefined` | Optional | ISO8601 timestamp |

## Example

```ts
import { MRR } from '@maxio-com/advanced-billing-sdk';

const mRR: MRR = {
  amountInCents: BigInt(122),
  amountFormatted: 'amount_formatted4',
  currency: 'currency2',
  currencySymbol: 'currency_symbol0',
  breakouts: {
    planAmountInCents: BigInt(254),
    planAmountFormatted: 'plan_amount_formatted0',
    usageAmountInCents: BigInt(106),
    usageAmountFormatted: 'usage_amount_formatted8',
  },
};
```

