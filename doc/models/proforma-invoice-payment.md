
# Proforma Invoice Payment

## Structure

`ProformaInvoicePayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `memo` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `originalAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `appliedAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `prepayment` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { ProformaInvoicePayment } from '@maxio-com/advanced-billing-sdk';

const proformaInvoicePayment: ProformaInvoicePayment = {
  memo: 'memo2',
  originalAmount: 'original_amount2',
  appliedAmount: 'applied_amount0',
  prepayment: false,
};
```

