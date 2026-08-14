
# Public Key

## Structure

`PublicKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publicKey` | `string \| undefined` | Optional | - |
| `requiresSecurityToken` | `boolean \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |

## Example

```ts
import { PublicKey } from '@maxio-com/advanced-billing-sdk';

const publicKey: PublicKey = {
  publicKey: 'public_key2',
  requiresSecurityToken: false,
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

