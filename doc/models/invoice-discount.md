
# Invoice Discount

## Structure

`InvoiceDiscount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `sourceType` | [`InvoiceDiscountSourceType \| undefined`](../../doc/models/invoice-discount-source-type.md) | Optional | - |
| `sourceId` | `number \| undefined` | Optional | - |
| `discountType` | [`InvoiceDiscountType \| undefined`](../../doc/models/invoice-discount-type.md) | Optional | - |
| `percentage` | `string \| undefined` | Optional | - |
| `eligibleAmount` | `string \| undefined` | Optional | - |
| `discountAmount` | `string \| undefined` | Optional | - |
| `transactionId` | `number \| undefined` | Optional | - |
| `lineItemBreakouts` | [`InvoiceDiscountBreakout[] \| undefined`](../../doc/models/invoice-discount-breakout.md) | Optional | - |

## Example

```ts
import {
  InvoiceDiscount,
  InvoiceDiscountSourceType,
} from '@maxio-com/advanced-billing-sdk';

const invoiceDiscount: InvoiceDiscount = {
  uid: 'uid4',
  title: 'title0',
  description: 'description6',
  code: 'code2',
  sourceType: InvoiceDiscountSourceType.Coupon,
};
```

