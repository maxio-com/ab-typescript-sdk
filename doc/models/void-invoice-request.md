
# Void Invoice Request

## Structure

`VoidInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mVoid` | [`VoidInvoice`](../../doc/models/void-invoice.md) | Required | - |

## Example

```ts
import { VoidInvoiceRequest } from '@maxio-com/advanced-billing-sdk';

const voidInvoiceRequest: VoidInvoiceRequest = {
  mVoid: {
    reason: 'reason6',
  },
};
```

