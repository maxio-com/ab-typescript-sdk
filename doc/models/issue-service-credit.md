
# Issue Service Credit

## Structure

`IssueServiceCredit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`IssueServiceCreditAmount`](../../doc/models/containers/issue-service-credit-amount.md) | Required | This is a container for one-of cases. |
| `memo` | `string \| undefined` | Optional | - |

## Example

```ts
import { IssueServiceCredit } from '@maxio-com/advanced-billing-sdk';

const issueServiceCredit: IssueServiceCredit = {
  amount: 44.88,
  memo: 'memo6',
};
```

