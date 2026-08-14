
# Pay Pal Vault

The vault that stores the payment profile with the provided vault_token.

## Enumeration

`PayPalVault`

## Fields

| Name |
|  --- |
| `BraintreeBlue` |
| `Paypal` |
| `Moduslink` |
| `PaypalComplete` |

## Example

```ts
import { PayPalVault } from '@maxio-com/advanced-billing-sdk';

const payPalVault = PayPalVault.Moduslink;
```

