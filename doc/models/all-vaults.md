
# All Vaults

The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing.

## Enumeration

`AllVaults`

## Fields

| Name |
|  --- |
| `Adyen` |
| `Authorizenet` |
| `Beanstream` |
| `BlueSnap` |
| `Bogus` |
| `Braintree1` |
| `BraintreeBlue` |
| `Checkout` |
| `Cybersource` |
| `Elavon` |
| `Eway` |
| `EwayRapid` |
| `EwayRapidStd` |
| `Firstdata` |
| `Forte` |
| `Gocardless` |
| `Litle` |
| `MaxioPayments` |
| `Maxp` |
| `Moduslink` |
| `Moneris` |
| `Nmi` |
| `Orbital` |
| `PaymentExpress` |
| `Paymill` |
| `Paypal` |
| `PaypalComplete` |
| `Pin` |
| `Square` |
| `Stripe` |
| `StripeConnect` |
| `TrustCommerce` |
| `Unipaas` |
| `Wirecard` |

## Example

```ts
import { AllVaults } from '@maxio-com/advanced-billing-sdk';

const allVaults = AllVaults.EwayRapidStd;
```

