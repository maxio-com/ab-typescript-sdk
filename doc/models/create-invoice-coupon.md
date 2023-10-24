
# Create Invoice Coupon

## Structure

`CreateInvoiceCoupon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | - |
| `percentage` | [`CreateInvoiceCouponPercentage \| undefined`](../../doc/models/containers/create-invoice-coupon-percentage.md) | Optional | This is a container for one-of cases. |
| `amount` | [`CreateInvoiceCouponAmount \| undefined`](../../doc/models/containers/create-invoice-coupon-amount.md) | Optional | This is a container for one-of cases. |
| `description` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `255` |
| `productFamilyId` | [`CreateInvoiceCouponProductFamilyId \| undefined`](../../doc/models/containers/create-invoice-coupon-product-family-id.md) | Optional | This is a container for one-of cases. |
| `compoundingStrategy` | [`CreateInvoiceCouponCompoundingStrategy \| undefined`](../../doc/models/containers/create-invoice-coupon-compounding-strategy.md) | Optional | This is a container for one-of cases. |

## Example (as JSON)

```json
{
  "percentage": 50.0,
  "code": "code4",
  "amount": "String9",
  "description": "description4",
  "product_family_id": "String3"
}
```

