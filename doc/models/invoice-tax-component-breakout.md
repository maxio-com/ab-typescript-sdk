
# Invoice Tax Component Breakout

## Structure

`InvoiceTaxComponentBreakout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxRuleId` | `number \| undefined` | Optional | - |
| `percentage` | `string \| undefined` | Optional | - |
| `countryCode` | `string \| undefined` | Optional | - |
| `subdivisionCode` | `string \| undefined` | Optional | - |
| `taxAmount` | `string \| undefined` | Optional | - |
| `taxableAmount` | `string \| undefined` | Optional | - |
| `taxExemptAmount` | `string \| undefined` | Optional | - |
| `nonTaxableAmount` | `string \| undefined` | Optional | - |
| `taxName` | `string \| undefined` | Optional | - |
| `taxType` | `string \| undefined` | Optional | - |
| `rateType` | `string \| undefined` | Optional | - |
| `taxAuthorityType` | `number \| undefined` | Optional | - |
| `stateAssignedNo` | `string \| undefined` | Optional | - |
| `taxSubType` | `string \| undefined` | Optional | - |

## Example

```ts
import { InvoiceTaxComponentBreakout } from '@maxio-com/advanced-billing-sdk';

const invoiceTaxComponentBreakout: InvoiceTaxComponentBreakout = {
  taxRuleId: 66,
  percentage: 'percentage0',
  countryCode: 'country_code2',
  subdivisionCode: 'subdivision_code6',
  taxAmount: 'tax_amount4',
};
```

