
# Chjs Tokenization Success

## Structure

`ChjsTokenizationSuccess`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentProfile` | [`TokenizedPaymentProfile`](../../doc/models/tokenized-payment-profile.md) | Required | - |
| `gatewayCustomerId` | `number \| null \| undefined` | Optional | - |

## Example

```ts
import { ChjsTokenizationSuccess } from '@maxio-com/advanced-billing-sdk';

const chjsTokenizationSuccess: ChjsTokenizationSuccess = {
  paymentProfile: {
    id: 44,
    vaultToken: 'vault_token6',
    gatewayHandle: 'gateway_handle4',
    customerVaultToken: 'customer_vault_token2',
  },
  gatewayCustomerId: 228,
};
```

