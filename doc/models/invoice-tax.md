
# Invoice Tax

## Structure

`InvoiceTax`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `sourceType` | [`ProformaInvoiceTaxSourceType \| undefined`](../../doc/models/proforma-invoice-tax-source-type.md) | Optional | - |
| `sourceId` | `number \| undefined` | Optional | - |
| `percentage` | `string \| undefined` | Optional | - |
| `taxableAmount` | `string \| undefined` | Optional | - |
| `taxAmount` | `string \| undefined` | Optional | - |
| `transactionId` | `number \| undefined` | Optional | - |
| `lineItemBreakouts` | [`InvoiceTaxBreakout[] \| undefined`](../../doc/models/invoice-tax-breakout.md) | Optional | - |
| `taxComponentBreakouts` | [`InvoiceTaxComponentBreakout[] \| undefined`](../../doc/models/invoice-tax-component-breakout.md) | Optional | - |
| `euVat` | `boolean \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `taxExemptAmount` | `string \| undefined` | Optional | - |

## Example

```ts
import {
  InvoiceTax,
  ProformaInvoiceTaxSourceType,
} from '@maxio-com/advanced-billing-sdk';

const invoiceTax: InvoiceTax = {
  uid: 'uid2',
  title: 'title8',
  description: 'description2',
  sourceType: ProformaInvoiceTaxSourceType.Tax,
  sourceId: 86,
};
```

