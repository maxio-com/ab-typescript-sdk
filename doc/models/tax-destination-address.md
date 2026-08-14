
# Tax Destination Address

## Enumeration

`TaxDestinationAddress`

## Fields

| Name |
|  --- |
| `ShippingThenBilling` |
| `BillingThenShipping` |
| `ShippingOnly` |
| `BillingOnly` |

## Example

```ts
import { TaxDestinationAddress } from '@maxio-com/advanced-billing-sdk';

const taxDestinationAddress = TaxDestinationAddress.ShippingOnly;
```

