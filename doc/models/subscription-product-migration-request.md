
# Subscription Product Migration Request

## Structure

`SubscriptionProductMigrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `migration` | [`SubscriptionProductMigration`](../../doc/models/subscription-product-migration.md) | Required | - |

## Example

```ts
import {
  SubscriptionProductMigrationRequest,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionProductMigrationRequest: SubscriptionProductMigrationRequest = {
  migration: {
    productId: 158,
    productPricePointId: 82,
    includeTrial: false,
    includeInitialCharge: false,
    includeCoupons: true,
    preservePeriod: false,
  },
};
```

