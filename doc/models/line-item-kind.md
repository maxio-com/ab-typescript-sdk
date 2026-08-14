
# Line Item Kind

A handle for the line item kind

## Enumeration

`LineItemKind`

## Fields

| Name |
|  --- |
| `Baseline` |
| `Initial` |
| `Trial` |
| `QuantityBasedComponent` |
| `PrepaidUsageComponent` |
| `OnOffComponent` |
| `MeteredComponent` |
| `EventBasedComponent` |
| `Coupon` |
| `Tax` |

## Example

```ts
import { LineItemKind } from '@maxio-com/advanced-billing-sdk';

const lineItemKind = LineItemKind.PrepaidUsageComponent;
```

