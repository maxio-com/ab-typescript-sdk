
# Get One Time Token Request

## Structure

`GetOneTimeTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentProfile` | [`GetOneTimeTokenRequestPaymentProfile`](../../doc/models/containers/get-one-time-token-request-payment-profile.md) | Required | This is a container for any-of cases. |

## Example

```ts
import {
  CardType,
  CreditCardVault,
  GetOneTimeTokenRequest,
} from '@maxio-com/advanced-billing-sdk';

const getOneTimeTokenRequest: GetOneTimeTokenRequest = {
  paymentProfile: {
    firstName: 'first_name2',
    lastName: 'last_name0',
    maskedCardNumber: 'masked_card_number0',
    cardType: CardType.Routex,
    expirationMonth: 187.78,
    expirationYear: 164.44,
    currentVault: CreditCardVault.BraintreeBlue,
    vaultToken: 'vault_token4',
    billingAddress: 'billing_address4',
    billingCity: 'billing_city0',
    billingCountry: 'billing_country6',
    billingState: 'billing_state6',
    billingZip: 'billing_zip0',
    paymentType: 'payment_type2',
    disabled: false,
    siteGatewaySettingId: 232,
    id: 'id2',
    customerId: 'customer_id0',
    billingAddress2: 'billing_address_24',
    customerVaultToken: 'customer_vault_token0',
    gatewayHandle: 'gateway_handle4',
  },
};
```

