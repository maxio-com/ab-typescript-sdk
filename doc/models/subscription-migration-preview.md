
# Subscription Migration Preview

## Structure

`SubscriptionMigrationPreview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `proratedAdjustmentInCents` | `number \| undefined` | Optional | The amount of the prorated adjustment that would be issued for the current subscription. |
| `chargeInCents` | `number \| undefined` | Optional | The amount of the charge that would be created for the new product. |
| `paymentDueInCents` | `number \| undefined` | Optional | The amount of the payment due in the case of an upgrade. |
| `creditAppliedInCents` | `number \| undefined` | Optional | The amount of the credit that would be applied in the case that some is available to the subscription |

## Example (as JSON)

```json
{
  "prorated_adjustment_in_cents": 134,
  "charge_in_cents": 16,
  "payment_due_in_cents": 188,
  "credit_applied_in_cents": 148
}
```

