
# Deduct Service Credit Request

## Structure

`DeductServiceCreditRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deduction` | [`DeductServiceCredit`](../../doc/models/deduct-service-credit.md) | Required | - |

## Example

```ts
import { DeductServiceCreditRequest } from '@maxio-com/advanced-billing-sdk';

const deductServiceCreditRequest: DeductServiceCreditRequest = {
  deduction: {
    amount: 'String9',
    memo: 'memo0',
  },
};
```

