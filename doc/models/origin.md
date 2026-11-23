
# Origin

How the grant was created. `recurring` comes from the wallet's automatic funding schedule (see the wallet's `recurring_funding` array). `manual` comes from a one-time grant posted to [Create Wallet Transaction](../../doc/controllers/wallet-transactions.md#create-wallet-transaction). `initial_balance` comes from a non-zero `initial_balance` at wallet creation. `allowance_increase` comes from raising a funding entitlement's allowance while it's already funding a wallet. `purchase` comes from [Create Wallet Purchase](../../doc/controllers/wallet-purchases.md#create-wallet-purchase).

## Enumeration

`Origin`

## Fields

| Name |
|  --- |
| `Recurring` |
| `Manual` |
| `InitialBalance` |
| `AllowanceIncrease` |
| `Purchase` |

## Example

```ts
import { Origin } from '@maxio-com/advanced-billing-sdk';

const origin = Origin.Purchase;
```

