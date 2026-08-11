
# Webhook Subscription

## Enumeration

`WebhookSubscription`

## Fields

| Name |
|  --- |
| `BillingDateChange` |
| `ComponentAllocationChange` |
| `ChjsTokenizationFailure` |
| `ChjsTokenizationSuccess` |
| `CustomerCreate` |
| `CustomerUpdate` |
| `DunningStepReached` |
| `ExpiringCard` |
| `ExpirationDateChange` |
| `InvoiceIssued` |
| `InvoicePending` |
| `MeteredUsage` |
| `PaymentFailure` |
| `PaymentSuccess` |
| `DirectDebitPaymentPending` |
| `DirectDebitPaymentPaidOut` |
| `DirectDebitPaymentRejected` |
| `PrepaidSubscriptionBalanceChanged` |
| `PrepaidUsage` |
| `RefundFailure` |
| `RefundSuccess` |
| `RenewalFailure` |
| `RenewalSuccess` |
| `SignupFailure` |
| `SignupSuccess` |
| `StatementClosed` |
| `StatementSettled` |
| `SubscriptionCardUpdate` |
| `SubscriptionGroupCardUpdate` |
| `SubscriptionProductChange` |
| `SubscriptionProductChangeScheduled` |
| `SubscriptionStateChange` |
| `TrialEndNotice` |
| `UpcomingRenewalNotice` |
| `UpgradeDowngradeFailure` |
| `UpgradeDowngradeSuccess` |
| `PendingCancellationChange` |
| `SubscriptionPrepaymentAccountBalanceChanged` |
| `SubscriptionServiceCreditAccountBalanceChanged` |

## Example

```ts
import { WebhookSubscription } from '@maxio-com/advanced-billing-sdk';

const webhookSubscription = WebhookSubscription.DirectDebitPaymentPending;
```

