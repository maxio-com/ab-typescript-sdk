
# Update Invoice

Attributes of a draft ad hoc invoice which can be updated. Only the submitted attributes are changed.

## Structure

`UpdateInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lineItems` | [`UpdateInvoiceItem[] \| undefined`](../../doc/models/update-invoice-item.md) | Optional | Line item changes to apply. Line items without a `uid` are added, line items with a `uid` are updated, and line items with a `uid` and `_destroy` set to `true` are removed. Existing line items not referenced in the array remain unchanged. |
| `issueDate` | `string \| undefined` | Optional | New issue date for the invoice (format YYYY-MM-DD). This date is interpreted and validated in your site's time zone. It must be today or a date in the past — future dates are not accepted. The due date is recalculated from the issue date and net terms. |
| `netTerms` | `number \| undefined` | Optional | Number of days after the issue date on which the invoice is due. The due date is recalculated when net terms or the issue date change. |
| `paymentInstructions` | `string \| undefined` | Optional | Custom payment instructions displayed on the invoice. |
| `memo` | `string \| undefined` | Optional | A custom memo displayed on the invoice. |
| `sellerAddress` | [`CreateInvoiceAddress \| undefined`](../../doc/models/create-invoice-address.md) | Optional | Replaces the seller address on the invoice |
| `billingAddress` | [`CreateInvoiceAddress \| undefined`](../../doc/models/create-invoice-address.md) | Optional | Replaces the billing address on the invoice |
| `shippingAddress` | [`CreateInvoiceAddress \| undefined`](../../doc/models/create-invoice-address.md) | Optional | Replaces the shipping address on the invoice |
| `coupons` | [`CreateInvoiceCoupon[] \| undefined`](../../doc/models/create-invoice-coupon.md) | Optional | When present, replaces all discounts currently applied to the invoice. Send an empty array to remove all discounts. |

## Example

```ts
import { UpdateInvoice } from '@maxio-com/advanced-billing-sdk';

const updateInvoice: UpdateInvoice = {
  lineItems: [
    {
      title: 'title4',
      quantity: 56.68,
      unitPrice: 39.9,
      taxable: false,
      taxCode: 'tax_code6',
    }
  ],
  issueDate: '2024-01-01',
  netTerms: 46,
  paymentInstructions: 'payment_instructions6',
  memo: 'memo2',
};
```

