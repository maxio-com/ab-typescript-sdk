
# Invoice Tax Breakout

## Structure

`InvoiceTaxBreakout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `taxableAmount` | `string \| undefined` | Optional | - |
| `taxAmount` | `string \| undefined` | Optional | - |
| `taxExemptAmount` | `string \| undefined` | Optional | - |

## Example

```ts
import { InvoiceTaxBreakout } from '@maxio-com/advanced-billing-sdk';

const invoiceTaxBreakout: InvoiceTaxBreakout = {
  uid: 'uid4',
  taxableAmount: 'taxable_amount8',
  taxAmount: 'tax_amount2',
  taxExemptAmount: 'tax_exempt_amount4',
};
```

