
# Deduct Service Credit

## Structure

`DeductServiceCredit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`DeductServiceCreditAmount`](../../doc/models/containers/deduct-service-credit-amount.md) | Required | This is a container for one-of cases. |
| `memo` | `string \| undefined` | Optional | - |

## Example

```ts
import { DeductServiceCredit } from '@maxio-com/advanced-billing-sdk';

const deductServiceCredit: DeductServiceCredit = {
  amount: 'String5',
  memo: 'memo6',
};
```

