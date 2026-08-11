
# Tokenized Payment Profile

## Structure

`TokenizedPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `vaultToken` | `string \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |
| `customerVaultToken` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { TokenizedPaymentProfile } from '@maxio-com/advanced-billing-sdk';

const tokenizedPaymentProfile: TokenizedPaymentProfile = {
  id: 116,
  vaultToken: 'vault_token0',
  gatewayHandle: 'gateway_handle0',
  customerVaultToken: 'customer_vault_token6',
};
```

