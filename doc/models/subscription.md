
# Subscription

## Structure

`Subscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The subscription unique id within Chargify. |
| `state` | `string \| undefined` | Optional | The current state of the subscription. Please see the documentation for [Subscription States](https://help.chargify.com/subscriptions/subscription-states.html) |
| `balanceInCents` | `number \| undefined` | Optional | Gives the current outstanding subscription balance in the number of cents. |
| `totalRevenueInCents` | `number \| undefined` | Optional | Gives the total revenue from the subscription in the number of cents. |
| `productPriceInCents` | `number \| undefined` | Optional | (Added Nov 5 2013) The recurring amount of the product (and version),currently subscribed. NOTE: this may differ from the current price of,the product, if you’ve changed the price of the product but haven’t,moved this subscription to a newer version. |
| `productVersionNumber` | `number \| undefined` | Optional | The version of the product for the subscription. Note that this is a deprecated field kept for backwards-compatibility. |
| `currentPeriodEndsAt` | `string \| undefined` | Optional | Timestamp relating to the end of the current (recurring) period (i.e.,when the next regularly scheduled attempted charge will occur) |
| `nextAssessmentAt` | `string \| undefined` | Optional | Timestamp that indicates when capture of payment will be tried or,retried. This value will usually track the current_period_ends_at, but,will diverge if a renewal payment fails and must be retried. In that,case, the current_period_ends_at will advance to the end of the next,period (time doesn’t stop because a payment was missed) but the,next_assessment_at will be scheduled for the auto-retry time (i.e. 24,hours in the future, in some cases) |
| `trialStartedAt` | `string \| null \| undefined` | Optional | Timestamp for when the trial period (if any) began |
| `trialEndedAt` | `string \| null \| undefined` | Optional | Timestamp for when the trial period (if any) ended |
| `activatedAt` | `string \| undefined` | Optional | Timestamp for when the subscription began (i.e. when it came out of trial, or when it began in the case of no trial) |
| `expiresAt` | `string \| null \| undefined` | Optional | Timestamp giving the expiration date of this subscription (if any) |
| `createdAt` | `string \| undefined` | Optional | The creation date for this subscription |
| `updatedAt` | `string \| undefined` | Optional | The date of last update for this subscription |
| `cancellationMessage` | `string \| null \| undefined` | Optional | Seller-provided reason for, or note about, the cancellation. |
| `cancellationMethod` | [`SubscriptionCancellationMethod \| null \| undefined`](../../doc/models/containers/subscription-cancellation-method.md) | Optional | This is a container for one-of cases. |
| `cancelAtEndOfPeriod` | `boolean \| null \| undefined` | Optional | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceledAt` | `string \| null \| undefined` | Optional | The timestamp of the most recent cancellation |
| `currentPeriodStartedAt` | `string \| undefined` | Optional | Timestamp relating to the start of the current (recurring) period |
| `previousState` | `string \| undefined` | Optional | Only valid for webhook payloads The previous state for webhooks that have indicated a change in state. For normal API calls, this will always be the same as the state (current state) |
| `signupPaymentId` | `number \| undefined` | Optional | The ID of the transaction that generated the revenue |
| `signupRevenue` | `string \| undefined` | Optional | The revenue, formatted as a string of decimal separated dollars and,cents, from the subscription signup ($50.00 would be formatted as,50.00) |
| `delayedCancelAt` | `string \| null \| undefined` | Optional | Timestamp for when the subscription is currently set to cancel. |
| `couponCode` | `string \| null \| undefined` | Optional | (deprecated) The coupon code of the single coupon currently applied to the subscription. See coupon_codes instead as subscriptions can now have more than one coupon. |
| `snapDay` | `string \| null \| undefined` | Optional | The day of the month that the subscription will charge according to calendar billing rules, if used. |
| `paymentCollectionMethod` | [`SubscriptionPaymentCollectionMethod \| null \| undefined`](../../doc/models/containers/subscription-payment-collection-method.md) | Optional | This is a container for one-of cases. |
| `customer` | [`Customer \| undefined`](../../doc/models/customer.md) | Optional | - |
| `product` | [`Product \| undefined`](../../doc/models/product.md) | Optional | - |
| `creditCard` | [`PaymentProfile \| undefined`](../../doc/models/payment-profile.md) | Optional | - |
| `group` | [`SubscriptionGroup2 \| null \| undefined`](../../doc/models/containers/subscription-group-2.md) | Optional | This is a container for one-of cases. |
| `bankAccount` | [`SubscriptionBankAccount \| undefined`](../../doc/models/subscription-bank-account.md) | Optional | - |
| `paymentType` | `string \| null \| undefined` | Optional | The payment profile type for the active profile on file. |
| `referralCode` | `string \| null \| undefined` | Optional | The subscription's unique code that can be given to referrals. |
| `nextProductId` | `number \| null \| undefined` | Optional | If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. |
| `nextProductHandle` | `string \| null \| undefined` | Optional | If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. |
| `couponUseCount` | `number \| null \| undefined` | Optional | (deprecated) How many times the subscription's single coupon has been used. This field has no replacement for multiple coupons. |
| `couponUsesAllowed` | `number \| null \| undefined` | Optional | (deprecated) How many times the subscription's single coupon may be used. This field has no replacement for multiple coupons. |
| `reasonCode` | `string \| null \| undefined` | Optional | If the subscription is canceled, this is their churn code. |
| `automaticallyResumeAt` | `string \| null \| undefined` | Optional | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `couponCodes` | `string[] \| undefined` | Optional | An array for all the coupons attached to the subscription. |
| `offerId` | `number \| null \| undefined` | Optional | The ID of the offer associated with the subscription. |
| `payerId` | `number \| undefined` | Optional | On Relationship Invoicing, the ID of the individual paying for the subscription. Defaults to the Customer ID unless the 'Customer Hierarchies & WhoPays' feature is enabled. |
| `currentBillingAmountInCents` | `number \| undefined` | Optional | The balance in cents plus the estimated renewal amount in cents. |
| `productPricePointId` | `number \| undefined` | Optional | The product price point currently subscribed to. |
| `productPricePointType` | `string \| undefined` | Optional | One of the following: custom, default, catalog. |
| `nextProductPricePointId` | `number \| null \| undefined` | Optional | If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. |
| `netTerms` | `number \| null \| undefined` | Optional | On Relationship Invoicing, the number of days before a renewal invoice is due. |
| `storedCredentialTransactionId` | `number \| null \| undefined` | Optional | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. This will ensure the card will be charged successfully at renewal. |
| `reference` | `string \| null \| undefined` | Optional | The reference value (provided by your app) for the subscription itelf. |
| `onHoldAt` | `string \| null \| undefined` | Optional | The timestamp of the most recent on hold action. |
| `prepaidDunning` | `boolean \| undefined` | Optional | Boolean representing whether the subscription is prepaid and currently in dunning. Only returned for Relationship Invoicing sites with the feature enabled |
| `coupons` | [`SubscriptionIncludedCoupon[] \| undefined`](../../doc/models/subscription-included-coupon.md) | Optional | Additional coupon data. To use this data you also have to include the following param in the request`include[]=coupons`.<br>Only in Read Subscription Endpoint. |
| `dunningCommunicationDelayEnabled` | `boolean \| undefined` | Optional | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute.<br>**Default**: `false` |
| `dunningCommunicationDelayTimeZone` | `string \| null \| undefined` | Optional | Time zone for the Dunning Communication Delay feature. |
| `receivesInvoiceEmails` | `boolean \| null \| undefined` | Optional | - |
| `locale` | `string \| null \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `scheduledCancellationAt` | `string \| null \| undefined` | Optional | - |
| `creditBalanceInCents` | `number \| undefined` | Optional | - |
| `prepaymentBalanceInCents` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "credit_card": {
    "id": 10088716,
    "first_name": "Test",
    "last_name": "Subscription",
    "masked_card_number": "XXXX-XXXX-XXXX-1",
    "card_type": "bogus",
    "expiration_month": 1,
    "expiration_year": 2022,
    "customer_id": 14543792,
    "current_vault": "bogus",
    "vault_token": "1",
    "billing_address": "123 Montana Way",
    "billing_city": "Billings",
    "billing_state": "MT",
    "billing_zip": "59101",
    "billing_country": "US",
    "customer_vault_token": null,
    "billing_address_2": "",
    "payment_type": "credit_card",
    "site_gateway_setting_id": 1,
    "gateway_handle": null
  },
  "dunning_communication_delay_enabled": false,
  "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
  "id": 96,
  "state": "state0",
  "balance_in_cents": 212,
  "total_revenue_in_cents": 136,
  "product_price_in_cents": 70
}
```

