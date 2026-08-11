
# Subscription Migration Preview Request

## Structure

`SubscriptionMigrationPreviewRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `migration` | [`SubscriptionMigrationPreviewOptions`](../../doc/models/subscription-migration-preview-options.md) | Required | - |

## Example

```ts
import {
  SubscriptionMigrationPreviewRequest,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionMigrationPreviewRequest: SubscriptionMigrationPreviewRequest = {
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

