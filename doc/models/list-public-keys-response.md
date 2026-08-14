
# List Public Keys Response

## Structure

`ListPublicKeysResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargifyJsKeys` | [`PublicKey[] \| undefined`](../../doc/models/public-key.md) | Optional | - |
| `meta` | [`ListPublicKeysMeta \| undefined`](../../doc/models/list-public-keys-meta.md) | Optional | - |

## Example

```ts
import { ListPublicKeysResponse } from '@maxio-com/advanced-billing-sdk';

const listPublicKeysResponse: ListPublicKeysResponse = {
  chargifyJsKeys: [
    {
      publicKey: 'public_key8',
      requiresSecurityToken: false,
      createdAt: '2016-03-13T12:52:32.123Z',
    }
  ],
  meta: {
    totalCount: 150,
    currentPage: 126,
    totalPages: 138,
    perPage: 152,
  },
};
```

