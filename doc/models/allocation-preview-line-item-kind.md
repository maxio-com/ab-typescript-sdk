
# Allocation Preview Line Item Kind

A handle for the line item kind for allocation preview

## Enumeration

`AllocationPreviewLineItemKind`

## Fields

| Name |
|  --- |
| `QuantityBasedComponent` |
| `OnOffComponent` |
| `Coupon` |
| `Tax` |

## Example

```ts
import {
  AllocationPreviewLineItemKind,
} from '@maxio-com/advanced-billing-sdk';

const allocationPreviewLineItemKind = AllocationPreviewLineItemKind.Coupon;
```

