
# Product

## Structure

`Product`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | The product name |
| `handle` | `string \| null \| undefined` | Optional | The product API handle |
| `description` | `string \| undefined` | Optional | The product description |
| `accountingCode` | `string \| null \| undefined` | Optional | E.g. Internal ID or SKU Number |
| `requestCreditCard` | `boolean \| undefined` | Optional | Deprecated value that can be ignored unless you have legacy hosted pages. For Public Signup Page users, please read this attribute from under the signup page. |
| `expirationInterval` | `number \| null \| undefined` | Optional | A numerical interval for the length a subscription to this product will run before it expires. See the description of interval for a description of how this value is coupled with an interval unit to calculate the full interval |
| `expirationIntervalUnit` | [`ProductExpirationIntervalUnit \| null \| undefined`](../../doc/models/containers/product-expiration-interval-unit.md) | Optional | This is a container for one-of cases. |
| `createdAt` | `string \| undefined` | Optional | Timestamp indicating when this product was created |
| `updatedAt` | `string \| undefined` | Optional | Timestamp indicating when this product was last updated |
| `priceInCents` | `number \| undefined` | Optional | The product price, in integer cents |
| `interval` | `number \| undefined` | Optional | The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this product would renew every 30 days |
| `intervalUnit` | [`ProductIntervalUnit \| undefined`](../../doc/models/containers/product-interval-unit.md) | Optional | This is a container for one-of cases. |
| `initialChargeInCents` | `number \| null \| undefined` | Optional | The up front charge you have specified. |
| `trialPriceInCents` | `number \| null \| undefined` | Optional | The price of the trial period for a subscription to this product, in integer cents. |
| `trialInterval` | `number \| null \| undefined` | Optional | A numerical interval for the length of the trial period of a subscription to this product. See the description of interval for a description of how this value is coupled with an interval unit to calculate the full interval |
| `trialIntervalUnit` | [`ProductTrialIntervalUnit \| null \| undefined`](../../doc/models/containers/product-trial-interval-unit.md) | Optional | This is a container for one-of cases. |
| `archivedAt` | `string \| null \| undefined` | Optional | Timestamp indicating when this product was archived |
| `requireCreditCard` | `boolean \| undefined` | Optional | Boolean that controls whether a payment profile is required to be entered for customers wishing to sign up on this product. |
| `returnParams` | `string \| null \| undefined` | Optional | - |
| `taxable` | `boolean \| undefined` | Optional | - |
| `updateReturnUrl` | `string \| null \| undefined` | Optional | The url to which a customer will be returned after a successful account update |
| `initialChargeAfterTrial` | `boolean \| undefined` | Optional | - |
| `versionNumber` | `number \| undefined` | Optional | The version of the product |
| `updateReturnParams` | `string \| null \| undefined` | Optional | The parameters will append to the url after a successful account update. See [help documentation](https://help.chargify.com/products/product-editing.html#return-parameters-after-account-update) |
| `productFamily` | [`ProductFamily \| undefined`](../../doc/models/product-family.md) | Optional | - |
| `publicSignupPages` | [`PublicSignupPage[] \| undefined`](../../doc/models/public-signup-page.md) | Optional | - |
| `productPricePointName` | `string \| undefined` | Optional | - |
| `requestBillingAddress` | `boolean \| undefined` | Optional | A boolean indicating whether to request a billing address on any Self-Service Pages that are used by subscribers of this product. |
| `requireBillingAddress` | `boolean \| undefined` | Optional | A boolean indicating whether a billing address is required to add a payment profile, especially at signup. |
| `requireShippingAddress` | `boolean \| undefined` | Optional | A boolean indicating whether a shipping address is required for the customer, especially at signup. |
| `taxCode` | `string \| null \| undefined` | Optional | A string representing the tax code related to the product type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. |
| `defaultProductPricePointId` | `number \| undefined` | Optional | - |
| `useSiteExchangeRate` | `boolean \| null \| undefined` | Optional | - |
| `itemCategory` | `string \| null \| undefined` | Optional | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `productPricePointId` | `number \| undefined` | Optional | - |
| `productPricePointHandle` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 180,
  "name": "name4",
  "handle": "handle0",
  "description": "description4",
  "accounting_code": "accounting_code0"
}
```

