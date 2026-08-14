
# Pricing Scheme

The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes.

## Enumeration

`PricingScheme`

## Fields

| Name |
|  --- |
| `Stairstep` |
| `Volume` |
| `PerUnit` |
| `Tiered` |

## Example

```ts
import { PricingScheme } from '@maxio-com/advanced-billing-sdk';

const pricingScheme = PricingScheme.Stairstep;
```

