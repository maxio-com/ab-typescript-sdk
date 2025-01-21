
# Getting Started with Maxio Advanced Billing

## Introduction

Maxio Advanced Billing (formerly Chargify) provides an HTTP-based API that conforms to the principles of REST.
One of the many reasons to use Advanced Billing is the immense feature set and surrounding community [client libraries](page:development-tools/client-libraries).
The Maxio API returns JSON responses as the primary and recommended format, but XML is also provided as a backwards compatible option for Merchants who require it.

### Steps to make your first Maxio Advanced Billing API call

1. [Sign-up](https://app.chargify.com/signup/maxio-billing-sandbox) or [log-in](https://app.chargify.com/login.html) to your [test site](https://maxio.zendesk.com/hc/en-us/articles/24250712113165-Testing-Overview) account.
2. [Setup and configure authentication](https://maxio.zendesk.com/hc/en-us/articles/24294819360525-API-Keys) credentials.
3. Submit your API request and try it out.
4. Verify results through response.
5. Test our integrations.

We strongly suggest exploring the developer portal, our [integrations](https://www.maxio.com/integrations) and the API guide, as well as the entire set of application-based documentation to aid in your discovery of the product.

#### Example

The following example uses the curl command-line tool to execute API requests.

**Request**

curl -u <api_key>:x -H Accept:application/json -H Content-Type:application/json https://acme.chargify.com/subscriptions.json

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install @maxio-com/advanced-billing-sdk@6.1.0
```

For additional package details, see the [Npm page for the @maxio-com/advanced-billing-sdk@6.1.0 npm](https://www.npmjs.com/package/@maxio-com/advanced-billing-sdk/v/6.1.0).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `site` | `string` | The subdomain for your Advanced Billing site.<br>*Default*: `'subdomain'` |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.US`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `120000` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `basicAuthCredentials` | [`BasicAuthCredentials`](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/auth/basic-authentication.md) | The credential object for basicAuth |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  basicAuthCredentials: {
    username: 'BasicAuthUserName',
    password: 'BasicAuthPassword'
  },
  timeout: 120000,
  environment: Environment.US,
  site: 'subdomain',
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| US | **Default** Default Advanced Billing environment hosted in US. Valid for the majority of our customers. |
| EU | Advanced Billing environment hosted in EU. Use only when you requested EU hosting for your AB account. |

## Authorization

This API uses the following authentication schemes.

* [`BasicAuth (Basic Authentication)`](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/auth/basic-authentication.md)

## List of APIs

* [API Exports](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/api-exports.md)
* [Advance Invoice](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/advance-invoice.md)
* [Billing Portal](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/billing-portal.md)
* [Component Price Points](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/component-price-points.md)
* [Custom Fields](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/custom-fields.md)
* [Events-Based Billing Segments](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/events-based-billing-segments.md)
* [Payment Profiles](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/payment-profiles.md)
* [Product Families](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/product-families.md)
* [Product Price Points](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/product-price-points.md)
* [Proforma Invoices](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/proforma-invoices.md)
* [Reason Codes](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/reason-codes.md)
* [Referral Codes](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/referral-codes.md)
* [Sales Commissions](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/sales-commissions.md)
* [Subscription Components](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/subscription-components.md)
* [Subscription Groups](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/subscription-groups.md)
* [Subscription Group Invoice Account](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/subscription-group-invoice-account.md)
* [Subscription Group Status](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/subscription-group-status.md)
* [Subscription Invoice Account](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/subscription-invoice-account.md)
* [Subscription Notes](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/subscription-notes.md)
* [Subscription Products](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/subscription-products.md)
* [Subscription Status](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/subscription-status.md)
* [Coupons](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/coupons.md)
* [Components](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/components.md)
* [Customers](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/customers.md)
* [Events](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/events.md)
* [Insights](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/insights.md)
* [Invoices](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/invoices.md)
* [Offers](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/offers.md)
* [Products](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/products.md)
* [Sites](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/sites.md)
* [Subscriptions](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/subscriptions.md)
* [Webhooks](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/controllers/webhooks.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/api-response.md)
* [ApiError](https://www.github.com/maxio-com/ab-typescript-sdk/tree/6.1.0/doc/api-error.md)

