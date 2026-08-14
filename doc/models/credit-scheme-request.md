
# Credit Scheme Request

## Structure

`CreditSchemeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditScheme` | [`CreditScheme`](../../doc/models/credit-scheme.md) | Required | - |

## Example

```ts
import {
  CreditScheme,
  CreditSchemeRequest,
} from '@maxio-com/advanced-billing-sdk';

const creditSchemeRequest: CreditSchemeRequest = {
  creditScheme: CreditScheme.Credit,
};
```

