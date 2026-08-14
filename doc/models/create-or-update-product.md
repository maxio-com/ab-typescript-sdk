
# Create or Update Product

## Structure

`CreateOrUpdateProduct`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The product name |
| `handle` | `string \| undefined` | Optional | The product API handle |
| `description` | `string` | Required | The product description |
| `accountingCode` | `string \| undefined` | Optional | E.g. Internal ID or SKU Number |
| `requireCreditCard` | `boolean \| undefined` | Optional | Deprecated value that can be ignored unless you have legacy hosted pages. For Public Signup Page users, read this attribute from under the signup page. |
| `priceInCents` | `bigint` | Required | The product price, in integer cents |
| `interval` | `number` | Required | The numerical interval. e.g., an interval of ‘30’ coupled with an interval_unit of day would mean this product would renew every 30 days. |
| `intervalUnit` | [`IntervalUnit`](../../doc/models/interval-unit.md) | Required | A string representing the interval unit for this product, either month or day |
| `trialPriceInCents` | `bigint \| undefined` | Optional | The product trial price, in integer cents |
| `trialInterval` | `number \| undefined` | Optional | The numerical trial interval. e.g., an interval of ‘30’ coupled with a trial_interval_unit of day would mean this product trial would last 30 days. |
| `trialIntervalUnit` | [`IntervalUnit \| null \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the trial interval unit for this product, either month or day |
| `trialType` | [`TrialType \| null \| undefined`](../../doc/models/trial-type.md) | Optional | Indicates how a trial is handled when the trial period ends and there is no credit card on file. For `no_obligation`, the subscription transitions to a Trial Ended state. Maxio will not send any emails or statements. For `payment_expected`, the subscription transitions to a Past Due state. Maxio will send normal dunning emails and statements according to your other settings. |
| `expirationInterval` | `number \| undefined` | Optional | The numerical expiration interval. e.g., an expiration_interval of ‘30’ coupled with an expiration_interval_unit of day would mean this product would expire after 30 days. |
| `expirationIntervalUnit` | [`ExpirationIntervalUnit \| null \| undefined`](../../doc/models/expiration-interval-unit.md) | Optional | A string representing the expiration interval unit for this product, either month, day or never |
| `autoCreateSignupPage` | `boolean \| undefined` | Optional | - |
| `taxCode` | `string \| undefined` | Optional | A string representing the tax code related to the product type. This is especially important when using AvaTax to tax based on locale. This attribute has a max length of 25 characters. |
| `unspscCode` | `string \| null \| undefined` | Optional | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. When set, this value is sent as the commodity code on invoice line items for this product instead of the default derived from item_category. |

## Example

```ts
import {
  CreateOrUpdateProduct,
  IntervalUnit,
} from '@maxio-com/advanced-billing-sdk';

const createOrUpdateProduct: CreateOrUpdateProduct = {
  name: 'name6',
  description: 'description4',
  priceInCents: BigInt(138),
  interval: 154,
  intervalUnit: IntervalUnit.Day,
  handle: 'handle2',
  accountingCode: 'accounting_code2',
  requireCreditCard: false,
  trialPriceInCents: BigInt(50),
  trialInterval: 252,
};
```

