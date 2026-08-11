
# Subscription Migration Preview Response

## Structure

`SubscriptionMigrationPreviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `migration` | [`SubscriptionMigrationPreview`](../../doc/models/subscription-migration-preview.md) | Required | - |

## Example

```ts
import {
  SubscriptionMigrationPreviewResponse,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionMigrationPreviewResponse: SubscriptionMigrationPreviewResponse = {
  migration: {
    proratedAdjustmentInCents: BigInt(196),
    chargeInCents: BigInt(78),
    paymentDueInCents: BigInt(250),
    creditAppliedInCents: BigInt(210),
  },
};
```

