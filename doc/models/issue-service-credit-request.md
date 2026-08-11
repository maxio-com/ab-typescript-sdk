
# Issue Service Credit Request

## Structure

`IssueServiceCreditRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceCredit` | [`IssueServiceCredit`](../../doc/models/issue-service-credit.md) | Required | - |

## Example

```ts
import { IssueServiceCreditRequest } from '@maxio-com/advanced-billing-sdk';

const issueServiceCreditRequest: IssueServiceCreditRequest = {
  serviceCredit: {
    amount: 31.42,
    memo: 'memo0',
  },
};
```

