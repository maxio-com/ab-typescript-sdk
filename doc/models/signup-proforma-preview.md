
# Signup Proforma Preview

## Structure

`SignupProformaPreview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentProformaInvoice` | [`ProformaInvoice \| undefined`](../../doc/models/proforma-invoice.md) | Optional | - |
| `nextProformaInvoice` | [`ProformaInvoice \| undefined`](../../doc/models/proforma-invoice.md) | Optional | - |

## Example

```ts
import { SignupProformaPreview } from '@maxio-com/advanced-billing-sdk';

const signupProformaPreview: SignupProformaPreview = {
  currentProformaInvoice: {
    uid: 'uid6',
    siteId: 72,
    customerId: 184,
    subscriptionId: 0,
    number: 132,
  },
  nextProformaInvoice: {
    uid: 'uid8',
    siteId: 212,
    customerId: 68,
    subscriptionId: 140,
    number: 16,
  },
};
```

