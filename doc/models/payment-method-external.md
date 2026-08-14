
# Payment Method External

## Structure

`PaymentMethodExternal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `details` | `string \| null` | Required | - |
| `kind` | `string` | Required | - |
| `memo` | `string \| null` | Required | - |
| `type` | [`InvoiceEventPaymentMethod`](../../doc/models/invoice-event-payment-method.md) | Required | - |

## Example

```ts
import {
  InvoiceEventPaymentMethod,
  PaymentMethodExternal,
} from '@maxio-com/advanced-billing-sdk';

const paymentMethodExternal: PaymentMethodExternal = {
  details: 'details0',
  kind: 'kind8',
  memo: 'memo4',
  type: InvoiceEventPaymentMethod.External,
};
```

