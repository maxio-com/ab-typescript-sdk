
# Proforma Invoice Credit

## Structure

`ProformaInvoiceCredit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `memo` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `originalAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `appliedAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |

## Example

```ts
import { ProformaInvoiceCredit } from '@maxio-com/advanced-billing-sdk';

const proformaInvoiceCredit: ProformaInvoiceCredit = {
  uid: 'uid4',
  memo: 'memo8',
  originalAmount: 'original_amount8',
  appliedAmount: 'applied_amount4',
};
```

