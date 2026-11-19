
# Wallet Transaction 1

## Structure

`WalletTransaction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kind` | [`Kind1`](../../doc/models/kind-1.md) | Required | Determines the direction of the movement. The amount itself is always sent positive. |
| `amount` | [`WalletTransaction1Amount`](../../doc/models/containers/wallet-transaction-1-amount.md) | Required | This is a container for one-of cases. |
| `memo` | `string \| null \| undefined` | Optional | **Constraints**: *Maximum Length*: `255` |
| `expiresAt` | `string \| null \| undefined` | Optional | An expiration for the grant this creates. Only accepted with `kind: grant`; sending it with `kind: debit` is rejected. Omit it for an evergreen grant. Accepts either a bare calendar date (`YYYY-MM-DD`), resolved to the end of that day in the site's time zone, or a full timestamp. A calendar day that doesn't exist, such as `2027-02-30`, is rejected with `422` rather than rolled into the next month. |

## Example

```ts
import { Kind1, WalletTransaction1 } from '@maxio-com/advanced-billing-sdk';

const walletTransaction1: WalletTransaction1 = {
  kind: Kind1.Grant,
  amount: 'String5',
  memo: 'memo6',
  expiresAt: 'expires_at4',
};
```

