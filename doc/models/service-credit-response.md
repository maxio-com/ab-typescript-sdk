
# Service Credit Response

## Structure

`ServiceCreditResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceCredit` | [`ServiceCredit`](../../doc/models/service-credit.md) | Required | - |

## Example

```ts
import {
  ServiceCreditResponse,
  ServiceCreditType,
} from '@maxio-com/advanced-billing-sdk';

const serviceCreditResponse: ServiceCreditResponse = {
  serviceCredit: {
    id: 38,
    amountInCents: BigInt(124),
    endingBalanceInCents: BigInt(164),
    entryType: ServiceCreditType.Credit,
    memo: 'memo0',
  },
};
```

