
# Signup Proforma Preview Response

## Structure

`SignupProformaPreviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `proformaInvoicePreview` | [`SignupProformaPreview`](../../doc/models/signup-proforma-preview.md) | Required | - |

## Example

```ts
import {
  SignupProformaPreviewResponse,
} from '@maxio-com/advanced-billing-sdk';

const signupProformaPreviewResponse: SignupProformaPreviewResponse = {
  proformaInvoicePreview: {
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
  },
};
```

