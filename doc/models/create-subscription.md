
# Create Subscription

## Structure

`CreateSubscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productHandle` | `string \| undefined` | Optional | The API Handle of the product for which you are creating a subscription. Required, unless a `product_id` is given instead. |
| `productId` | `string \| undefined` | Optional | The Product ID of the product for which you are creating a subscription. The product ID is not currently published, so we recommend using the API Handle instead. |
| `productPricePointHandle` | `string \| undefined` | Optional | The user-friendly API handle of a product's particular price point. |
| `productPricePointId` | `string \| undefined` | Optional | The ID of the particular price point on the product. |
| `customPrice` | [`CustomPriceUsedForSubscriptionCreateUpdate \| undefined`](../../doc/models/custom-price-used-for-subscription-create-update.md) | Optional | (Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription |
| `couponCode` | `string \| undefined` | Optional | (deprecated) The coupon code of the single coupon currently applied to the subscription. See coupon_codes instead as subscriptions can now have more than one coupon. |
| `couponCodes` | `string[] \| undefined` | Optional | An array for all the coupons attached to the subscription. |
| `paymentCollectionMethod` | [`PaymentCollectionMethod \| undefined`](../../doc/models/payment-collection-method.md) | Optional | The type of payment collection to be used in the subscription. For legacy Statements Architecture valid options are - `invoice`, `automatic`. For current Relationship Invoicing Architecture valid options are - `remittance`, `automatic`, `prepaid`.<br>**Default**: `PaymentCollectionMethod.Automatic` |
| `receivesInvoiceEmails` | `string \| undefined` | Optional | (Optional) Default: True - Whether or not this subscription is set to receive emails related to this subscription. |
| `netTerms` | `string \| undefined` | Optional | (Optional) Default: null The number of days after renewal (on invoice billing) that a subscription is due. A value between 0 (due immediately) and 180. |
| `customerId` | `number \| undefined` | Optional | The ID of an existing customer within Chargify. Required, unless a `customer_reference` or a set of `customer_attributes` is given. |
| `nextBillingAt` | `string \| undefined` | Optional | (Optional) Set this attribute to a future date/time to sync imported subscriptions to your existing renewal schedule. See the notes on “Date/Time Format” in our [subscription import documentation](https://maxio-chargify.zendesk.com/hc/en-us/articles/5404863655821#date-format). If you provide a next_billing_at timestamp that is in the future, no trial or initial charges will be applied when you create the subscription. In fact, no payment will be captured at all. The first payment will be captured, according to the prices defined by the product, near the time specified by next_billing_at. If you do not provide a value for next_billing_at, any trial and/or initial charges will be assessed and charged at the time of subscription creation. If the card cannot be successfully charged, the subscription will not be created. See further notes in the section on Importing Subscriptions. |
| `initialBillingAt` | `string \| undefined` | Optional | (Optional) Set this attribute to a future date/time to create a subscription in the "Awaiting Signup" state, rather than "Active" or "Trialing". See the notes on “Date/Time Format” in our [subscription import documentation](https://maxio-chargify.zendesk.com/hc/en-us/articles/5404863655821#date-format). In the "Awaiting Signup" state, a subscription behaves like any other. It can be canceled, allocated to, had its billing date changed. etc. When the initial_billing_at date hits, the subscription will transition to the expected state. If the product has a trial, the subscription will enter a trial, otherwise it will go active. Setup fees will be respected either before or after the trial, as configured on the price point. If the payment is due at the initial_billing_at and it fails the subscription will be immediately canceled. See further notes in the section on Delayed Signups. |
| `storedCredentialTransactionId` | `number \| undefined` | Optional | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. This will ensure the card will be charged successfully at renewal. |
| `salesRepId` | `number \| undefined` | Optional | - |
| `paymentProfileId` | `number \| undefined` | Optional | The Payment Profile ID of an existing card or bank account, which belongs to an existing customer to use for payment for this subscription. If the card, bank account, or customer does not exist already, or if you want to use a new (unstored) card or bank account for the subscription, use `payment_profile_attributes` instead to create a new payment profile along with the subscription. (This value is available on an existing subscription via the API as `credit_card` > id or `bank_account` > id) |
| `reference` | `string \| undefined` | Optional | The reference value (provided by your app) for the subscription itelf. |
| `customerAttributes` | [`CustomerAttributes \| undefined`](../../doc/models/customer-attributes.md) | Optional | - |
| `paymentProfileAttributes` | [`PaymentProfileAttributes \| undefined`](../../doc/models/payment-profile-attributes.md) | Optional | alias to credit_card_attributes |
| `creditCardAttributes` | [`PaymentProfileAttributes \| undefined`](../../doc/models/payment-profile-attributes.md) | Optional | Credit Card data to create a new Subscription. Interchangeable with `payment_profile_attributes` property. |
| `bankAccountAttributes` | [`BankAccountAttributes \| undefined`](../../doc/models/bank-account-attributes.md) | Optional | - |
| `components` | [`CreateSubscriptionComponents[] \| undefined`](../../doc/models/containers/create-subscription-components.md) | Optional | This is Array of a container for one-of cases. |
| `calendarBilling` | [`CalendarBilling \| undefined`](../../doc/models/calendar-billing.md) | Optional | (Optional). Cannot be used when also specifying next_billing_at |
| `metafields` | `Record<string, string> \| undefined` | Optional | (Optional) A set of key/value pairs representing custom fields and their values. Metafields will be created “on-the-fly” in your site for a given key, if they have not been created yet. |
| `customerReference` | `string \| undefined` | Optional | The reference value (provided by your app) of an existing customer within Chargify. Required, unless a `customer_id` or a set of `customer_attributes` is given. |
| `group` | [`CreateSubscriptionGroup2 \| undefined`](../../doc/models/containers/create-subscription-group-2.md) | Optional | This is a container for one-of cases. |
| `ref` | `string \| undefined` | Optional | A valid referral code. (optional, see [Referrals](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405420204045-Referrals-Reference#how-to-obtain-referral-codes) for more details). If supplied, must be valid, or else subscription creation will fail. |
| `cancellationMessage` | `string \| undefined` | Optional | (Optional) Can be used when canceling a subscription (via the HTTP DELETE method) to make a note about the reason for cancellation. |
| `cancellationMethod` | `string \| undefined` | Optional | (Optional) Can be used when canceling a subscription (via the HTTP DELETE method) to make a note about how the subscription was canceled. |
| `currency` | `string \| undefined` | Optional | (Optional) If Multi-Currency is enabled and the currency is configured in Chargify, pass it at signup to create a subscription on a non-default currency. Note that you cannot update the currency of an existing subscription. |
| `expiresAt` | `string \| undefined` | Optional | Timestamp giving the expiration date of this subscription (if any). You may manually change the expiration date at any point during a subscription period. |
| `expirationTracksNextBillingChange` | `string \| undefined` | Optional | (Optional, default false) When set to true, and when next_billing_at is present, if the subscription expires, the expires_at will be shifted by the same amount of time as the difference between the old and new “next billing” dates. |
| `agreementTerms` | `string \| undefined` | Optional | (Optional) The ACH authorization agreement terms. If enabled, an email will be sent to the customer with a copy of the terms. |
| `authorizerFirstName` | `string \| undefined` | Optional | (Optional) The first name of the person authorizing the ACH agreement. |
| `authorizerLastName` | `string \| undefined` | Optional | (Optional) The last name of the person authorizing the ACH agreement. |
| `calendarBillingFirstCharge` | `string \| undefined` | Optional | (Optional) One of “prorated” (the default – the prorated product price will be charged immediately), “immediate” (the full product price will be charged immediately), or “delayed” (the full product price will be charged with the first scheduled renewal). |
| `reasonCode` | `string \| undefined` | Optional | (Optional) Can be used when canceling a subscription (via the HTTP DELETE method) to indicate why a subscription was canceled. |
| `productChangeDelayed` | `boolean \| undefined` | Optional | (Optional, used only for Delayed Product Change When set to true, indicates that a changed value for product_handle should schedule the product change to the next subscription renewal. |
| `offerId` | [`CreateSubscriptionOfferId \| undefined`](../../doc/models/containers/create-subscription-offer-id.md) | Optional | This is a container for one-of cases. |
| `prepaidSubscriptionConfiguration` | [`UpsertPrepaidConfiguration \| undefined`](../../doc/models/upsert-prepaid-configuration.md) | Optional | - |
| `previousBillingAt` | `string \| undefined` | Optional | Providing a previous_billing_at that is in the past will set the current_period_starts_at when the subscription is created. It will also set activated_at if not explicitly passed during the subscription import. Can only be used if next_billing_at is also passed. Using this option will allow you to set the period start for the subscription so mid period component allocations have the correct prorated amount. |
| `importMrr` | `boolean \| undefined` | Optional | Setting this attribute to true will cause the subscription's MRR to be added to your MRR analytics immediately. For this value to be honored, a next_billing_at must be present and set to a future date. This key/value will not be returned in the subscription response body. |
| `canceledAt` | `string \| undefined` | Optional | - |
| `activatedAt` | `string \| undefined` | Optional | - |
| `agreementAcceptance` | [`AgreementAcceptance \| undefined`](../../doc/models/agreement-acceptance.md) | Optional | Required when creating a subscription with Maxio Payments. |
| `achAgreement` | [`ACHAgreement \| undefined`](../../doc/models/ach-agreement.md) | Optional | (Optional) If passed, the proof of the authorized ACH agreement terms will be persisted. |
| `dunningCommunicationDelayEnabled` | `boolean \| null \| undefined` | Optional | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute.<br>**Default**: `false` |
| `dunningCommunicationDelayTimeZone` | `string \| null \| undefined` | Optional | Time zone for the Dunning Communication Delay feature. |
| `skipBillingManifestTaxes` | `boolean \| undefined` | Optional | Valid only for the Subscription Preview endpoint. When set to `true` it skips calculating taxes for the current and next billing manifests.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "payment_collection_method": "automatic",
  "metafields": {
    "custom_field_name_1": "custom_field_value_1",
    "custom_field_name_2": "custom_field_value_2"
  },
  "dunning_communication_delay_enabled": false,
  "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
  "skip_billing_manifest_taxes": false,
  "product_handle": "product_handle6",
  "product_id": "product_id8",
  "product_price_point_handle": "product_price_point_handle0",
  "product_price_point_id": "product_price_point_id6",
  "custom_price": {
    "name": "name4",
    "handle": "handle0",
    "price_in_cents": "String3",
    "interval": "String3",
    "interval_unit": "day"
  }
}
```

