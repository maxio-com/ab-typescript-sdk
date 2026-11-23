
# Proforma Invoice Tax

## Structure

`ProformaInvoiceTax`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `title` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `sourceType` | [`ProformaInvoiceTaxSourceType \| undefined`](../../doc/models/proforma-invoice-tax-source-type.md) | Optional | The source of the tax. `Tax` is a tax configured in Advanced Billing. The other values identify the tax service that calculated the tax. |
| `percentage` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `taxableAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `taxAmount` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `lineItemBreakouts` | [`InvoiceTaxBreakout[] \| undefined`](../../doc/models/invoice-tax-breakout.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |

## Example

```ts
import {
  ProformaInvoiceTax,
  ProformaInvoiceTaxSourceType,
} from '@maxio-com/advanced-billing-sdk';

const proformaInvoiceTax: ProformaInvoiceTax = {
  uid: 'uid4',
  title: 'title0',
  sourceType: ProformaInvoiceTaxSourceType.Numeral,
  percentage: 'percentage2',
  taxableAmount: 'taxable_amount8',
};
```

