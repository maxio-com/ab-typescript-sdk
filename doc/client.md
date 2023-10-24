
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `subdomain` | `string` | The subdomain for your Chargify site.<br>*Default*: `'subdomain'` |
| `domain` | `string` | The Chargify server domain.<br>*Default*: `'chargify.com'` |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `30000` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `basicAuthUserName` | `string` | The username to use with basic authentication |
| `basicAuthPassword` | `string` | The password to use with basic authentication |

## HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

## RetryConfiguration

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
  timeout: 30000,
  environment: Environment.Production,
  basicAuthUserName: 'BasicAuthUserName',
  basicAuthPassword: 'BasicAuthPassword',
});
```

## Maxio Advanced Billing Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| aPIExports | Gets APIExportsController |
| advanceInvoice | Gets AdvanceInvoiceController |
| billingPortal | Gets BillingPortalController |
| coupons | Gets CouponsController |
| components | Gets ComponentsController |
| customers | Gets CustomersController |
| customFields | Gets CustomFieldsController |
| events | Gets EventsController |
| eventsBasedBillingSegments | Gets EventsBasedBillingSegmentsController |
| insights | Gets InsightsController |
| invoices | Gets InvoicesController |
| offers | Gets OffersController |
| paymentProfiles | Gets PaymentProfilesController |
| productFamilies | Gets ProductFamiliesController |
| products | Gets ProductsController |
| productPricePoints | Gets ProductPricePointsController |
| proformaInvoices | Gets ProformaInvoicesController |
| reasonCodes | Gets ReasonCodesController |
| referralCodes | Gets ReferralCodesController |
| salesCommissions | Gets SalesCommissionsController |
| sites | Gets SitesController |
| subscriptions | Gets SubscriptionsController |
| subscriptionComponents | Gets SubscriptionComponentsController |
| subscriptionGroups | Gets SubscriptionGroupsController |
| subscriptionGroupInvoiceAccount | Gets SubscriptionGroupInvoiceAccountController |
| subscriptionGroupStatus | Gets SubscriptionGroupStatusController |
| subscriptionInvoiceAccount | Gets SubscriptionInvoiceAccountController |
| subscriptionNotes | Gets SubscriptionNotesController |
| subscriptionProducts | Gets SubscriptionProductsController |
| subscriptionStatus | Gets SubscriptionStatusController |
| webhooks | Gets WebhooksController |

