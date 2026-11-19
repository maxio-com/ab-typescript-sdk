
# Wallet Hard Stop Overflow

Behavior at the hard-stop boundary. `discard` drains the wallet to zero and rejects the excess (the default). `allow_negative` deducts the full amount, letting the balance go negative. The excess past the wallet's grants is booked as an overdraft ledger row with `grant_id` set to `null`.

## Enumeration

`WalletHardStopOverflow`

## Fields

| Name |
|  --- |
| `Discard` |
| `AllowNegative` |

## Example

```ts
import { WalletHardStopOverflow } from '@maxio-com/advanced-billing-sdk';

const walletHardStopOverflow = WalletHardStopOverflow.Discard;
```

