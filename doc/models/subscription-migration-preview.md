
# Subscription Migration Preview

## Structure

`SubscriptionMigrationPreview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `proratedAdjustmentInCents` | `bigint \| undefined` | Optional | The amount of the prorated adjustment that would be issued for the current subscription. |
| `chargeInCents` | `bigint \| undefined` | Optional | The amount of the charge that would be created for the new product. |
| `paymentDueInCents` | `bigint \| undefined` | Optional | The amount of the payment due in the case of an upgrade. |
| `creditAppliedInCents` | `bigint \| undefined` | Optional | Represents a credit in cents that is applied to your subscription as part of a migration process for a specific product, which reduces the amount owed for the subscription. |

## Example

```ts
import {
  SubscriptionMigrationPreview,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionMigrationPreview: SubscriptionMigrationPreview = {
  proratedAdjustmentInCents: BigInt(6),
  chargeInCents: BigInt(144),
  paymentDueInCents: BigInt(60),
  creditAppliedInCents: BigInt(20),
};
```

