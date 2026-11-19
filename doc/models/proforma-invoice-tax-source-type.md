
# Proforma Invoice Tax Source Type

The source of the tax. `Tax` is a tax configured in Advanced Billing. The other values identify the tax service that calculated the tax.

## Enumeration

`ProformaInvoiceTaxSourceType`

## Fields

| Name |
|  --- |
| `Tax` |
| `Avalara` |
| `Anrok` |
| `TaxJar` |
| `Numeral` |
| `Sphere` |
| `Taxwire` |

## Example

```ts
import {
  ProformaInvoiceTaxSourceType,
} from '@maxio-com/advanced-billing-sdk';

const proformaInvoiceTaxSourceType = ProformaInvoiceTaxSourceType.TaxJar;
```

