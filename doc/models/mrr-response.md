
# MRR Response

## Structure

`MRRResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mrr` | [`MRR`](../../doc/models/mrr.md) | Required | - |

## Example

```ts
import { MRRResponse } from '@maxio-com/advanced-billing-sdk';

const mRRResponse: MRRResponse = {
  mrr: {
    amountInCents: BigInt(198),
    amountFormatted: 'amount_formatted6',
    currency: 'currency4',
    currencySymbol: 'currency_symbol2',
    breakouts: {
      planAmountInCents: BigInt(254),
      planAmountFormatted: 'plan_amount_formatted0',
      usageAmountInCents: BigInt(106),
      usageAmountFormatted: 'usage_amount_formatted8',
    },
  },
};
```

