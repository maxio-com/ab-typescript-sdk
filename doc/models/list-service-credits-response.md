
# List Service Credits Response

## Structure

`ListServiceCreditsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceCredits` | [`ServiceCredit1[] \| undefined`](../../doc/models/service-credit-1.md) | Optional | - |

## Example

```ts
import {
  ListServiceCreditsResponse,
  ServiceCreditType,
} from '@maxio-com/advanced-billing-sdk';

const listServiceCreditsResponse: ListServiceCreditsResponse = {
  serviceCredits: [
    {
      id: 224,
      amountInCents: BigInt(54),
      endingBalanceInCents: BigInt(94),
      entryType: ServiceCreditType.Credit,
      memo: 'memo2',
    },
    {
      id: 224,
      amountInCents: BigInt(54),
      endingBalanceInCents: BigInt(94),
      entryType: ServiceCreditType.Credit,
      memo: 'memo2',
    },
    {
      id: 224,
      amountInCents: BigInt(54),
      endingBalanceInCents: BigInt(94),
      entryType: ServiceCreditType.Credit,
      memo: 'memo2',
    }
  ],
};
```

