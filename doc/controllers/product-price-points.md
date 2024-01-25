# Product Price Points

```ts
const productPricePointsController = new ProductPricePointsController(client);
```

## Class Name

`ProductPricePointsController`

## Methods

* [Create Product Price Point](../../doc/controllers/product-price-points.md#create-product-price-point)
* [Archive Product Price Point](../../doc/controllers/product-price-points.md#archive-product-price-point)
* [Unarchive Product Price Point](../../doc/controllers/product-price-points.md#unarchive-product-price-point)
* [List All Product Price Points](../../doc/controllers/product-price-points.md#list-all-product-price-points)
* [Update Product Currency Prices](../../doc/controllers/product-price-points.md#update-product-currency-prices)
* [Promote Product Price Point to Default](../../doc/controllers/product-price-points.md#promote-product-price-point-to-default)
* [Create Product Price Points](../../doc/controllers/product-price-points.md#create-product-price-points)
* [Create Product Currency Prices](../../doc/controllers/product-price-points.md#create-product-currency-prices)
* [List Product Price Points](../../doc/controllers/product-price-points.md#list-product-price-points)
* [Update Product Price Point](../../doc/controllers/product-price-points.md#update-product-price-point)
* [Read Product Price Point](../../doc/controllers/product-price-points.md#read-product-price-point)


# Create Product Price Point

[Product Price Point Documentation](https://chargify.zendesk.com/hc/en-us/articles/4407755824155)

```ts
async createProductPricePoint(
  productId: CreateProductPricePointProductId,
  body?: CreateProductPricePointRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | [`CreateProductPricePointProductId`](../../doc/models/containers/create-product-price-point-product-id.md) | Template, Required | This is a container for one-of cases. |
| `body` | [`CreateProductPricePointRequest \| undefined`](../../doc/models/create-product-price-point-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductPricePointResponse`](../../doc/models/product-price-point-response.md)

## Example Usage

```ts
const productId: CreateProductPricePointProductId = 124;

const body: CreateProductPricePointRequest = {
  pricePoint: {
    name: 'Educational',
    priceInCents: BigInt(1000),
    interval: 1,
    intervalUnit: IntervalUnit.Month,
    handle: 'educational',
    trialPriceInCents: BigInt(4900),
    trialInterval: 1,
    trialIntervalUnit: IntervalUnit.Month,
    trialType: 'payment_expected',
    initialChargeInCents: BigInt(120000),
    initialChargeAfterTrial: false,
    expirationInterval: 12,
    expirationIntervalUnit: IntervalUnit.Month,
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.createProductPricePoint(
  productId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "price_point": {
    "id": 283,
    "name": "Educational",
    "handle": "educational",
    "price_in_cents": 1000,
    "interval": 1,
    "interval_unit": "month",
    "trial_price_in_cents": 4900,
    "trial_interval": 1,
    "trial_interval_unit": "month",
    "trial_type": "payment_expected",
    "initial_charge_in_cents": 120000,
    "initial_charge_after_trial": false,
    "expiration_interval": 12,
    "expiration_interval_unit": "month",
    "product_id": 901,
    "archived_at": "2023-11-30T06:37:20-05:00",
    "created_at": "2023-11-27T06:37:20-05:00",
    "updated_at": "2023-11-27T06:37:20-05:00"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ProductPricePointErrorResponseError`](../../doc/models/product-price-point-error-response-error.md) |


# Archive Product Price Point

Use this endpoint to archive a product price point.

```ts
async archiveProductPricePoint(
  productId: ArchiveProductPricePointProductId,
  pricePointId: ArchiveProductPricePointPricePointId,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | [`ArchiveProductPricePointProductId`](../../doc/models/containers/archive-product-price-point-product-id.md) | Template, Required | This is a container for one-of cases. |
| `pricePointId` | [`ArchiveProductPricePointPricePointId`](../../doc/models/containers/archive-product-price-point-price-point-id.md) | Template, Required | This is a container for one-of cases. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductPricePointResponse`](../../doc/models/product-price-point-response.md)

## Example Usage

```ts
const productId: ArchiveProductPricePointProductId = 124;

const pricePointId: ArchiveProductPricePointPricePointId = 188;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.archiveProductPricePoint(
  productId,
  pricePointId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "price_point": {
    "id": 283,
    "name": "Educational",
    "handle": "educational",
    "price_in_cents": 1000,
    "interval": 1,
    "interval_unit": "month",
    "trial_price_in_cents": 4900,
    "trial_interval": 1,
    "trial_interval_unit": "month",
    "trial_type": "payment_expected",
    "initial_charge_in_cents": 120000,
    "initial_charge_after_trial": false,
    "expiration_interval": 12,
    "expiration_interval_unit": "month",
    "product_id": 901,
    "archived_at": "2023-11-30T06:37:20-05:00",
    "created_at": "2023-11-27T06:37:20-05:00",
    "updated_at": "2023-11-27T06:37:20-05:00"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Unarchive Product Price Point

Use this endpoint to unarchive an archived product price point.

```ts
async unarchiveProductPricePoint(
  productId: number,
  pricePointId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `number` | Template, Required | The Chargify id of the product to which the price point belongs |
| `pricePointId` | `number` | Template, Required | The Chargify id of the product price point |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductPricePointResponse`](../../doc/models/product-price-point-response.md)

## Example Usage

```ts
const productId = 202;

const pricePointId = 10;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.unarchiveProductPricePoint(
  productId,
  pricePointId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "price_point": {
    "id": 283,
    "name": "Educational",
    "handle": "educational",
    "price_in_cents": 1000,
    "interval": 1,
    "interval_unit": "month",
    "trial_price_in_cents": 4900,
    "trial_interval": 1,
    "trial_interval_unit": "month",
    "trial_type": "payment_expected",
    "initial_charge_in_cents": 120000,
    "initial_charge_after_trial": false,
    "expiration_interval": 12,
    "expiration_interval_unit": "month",
    "product_id": 901,
    "archived_at": "2023-11-30T06:37:20-05:00",
    "created_at": "2023-11-27T06:37:20-05:00",
    "updated_at": "2023-11-27T06:37:20-05:00"
  }
}
```


# List All Product Price Points

This method allows retrieval of a list of Products Price Points belonging to a Site.

```ts
async listAllProductPricePoints(
  direction?: SortingDirection,
  filterArchivedAt?: IncludeNotNull,
  filterDateField?: BasicDateField,
  filterEndDate?: string,
  filterEndDatetime?: string,
  filterIds?: number[],
  filterStartDate?: string,
  filterStartDatetime?: string,
  filterType?: PricePointType[],
  include?: ListProductsPricePointsInclude,
  page?: number,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProductPricePointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `direction` | [`SortingDirection \| undefined`](../../doc/models/sorting-direction.md) | Query, Optional | Controls the order in which results are returned.<br>Use in query `direction=asc`. |
| `filterArchivedAt` | [`IncludeNotNull \| undefined`](../../doc/models/include-not-null.md) | Query, Optional | Allows fetching price points only if archived_at is present or not. Use in query: `filter[archived_at]=not_null`. |
| `filterDateField` | [`BasicDateField \| undefined`](../../doc/models/basic-date-field.md) | Query, Optional | The type of filter you would like to apply to your search. Use in query: `filter[date_field]=created_at`. |
| `filterEndDate` | `string \| undefined` | Query, Optional | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns price points with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| `filterEndDatetime` | `string \| undefined` | Query, Optional | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns price points with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. |
| `filterIds` | `number[] \| undefined` | Query, Optional | Allows fetching price points with matching id based on provided values. Use in query: `filter[ids]=1,2,3`. |
| `filterStartDate` | `string \| undefined` | Query, Optional | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns price points with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| `filterStartDatetime` | `string \| undefined` | Query, Optional | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns price points with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |
| `filterType` | [`PricePointType[] \| undefined`](../../doc/models/price-point-type.md) | Query, Optional | Allows fetching price points with matching type. Use in query: `filter[type]=catalog,custom`. |
| `include` | [`ListProductsPricePointsInclude \| undefined`](../../doc/models/list-products-price-points-include.md) | Query, Optional | Allows including additional data in the response. Use in query: `include=currency_prices`. |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListProductPricePointsResponse`](../../doc/models/list-product-price-points-response.md)

## Example Usage

```ts
const collect = {Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')
  include: ListProductsPricePointsInclude.CurrencyPrices,
  page: 2,
  perPage: 50
}
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.listAllProductPricePoints(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "price_points": [
    {
      "id": 0,
      "name": "My pricepoint",
      "handle": "handle",
      "price_in_cents": 10,
      "interval": 5,
      "interval_unit": "month",
      "trial_price_in_cents": 10,
      "trial_interval": 1,
      "trial_interval_unit": "month",
      "trial_type": "payment_expected",
      "introductory_offer": true,
      "initial_charge_in_cents": 0,
      "initial_charge_after_trial": true,
      "expiration_interval": 0,
      "expiration_interval_unit": "month",
      "product_id": 1230,
      "created_at": "2021-04-02T17:52:09-04:00",
      "updated_at": "2021-04-02T17:52:09-04:00",
      "use_site_exchange_rate": true
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Update Product Currency Prices

This endpoint allows you to update the `price`s of currency prices for a given currency that exists on the product price point.

When updating the pricing, it needs to mirror the structure of your primary pricing. If the product price point defines a trial and/or setup fee, each currency must also define a trial and/or setup fee.

Note: Currency Prices are not able to be updated for custom product price points.

```ts
async updateProductCurrencyPrices(
  productPricePointId: number,
  body?: UpdateCurrencyPricesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CurrencyPricesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productPricePointId` | `number` | Template, Required | The Chargify id of the product price point |
| `body` | [`UpdateCurrencyPricesRequest \| undefined`](../../doc/models/update-currency-prices-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CurrencyPricesResponse`](../../doc/models/currency-prices-response.md)

## Example Usage

```ts
const productPricePointId = 234;

const body: UpdateCurrencyPricesRequest = {
  currencyPrices: [
    {
      id: 200,
      price: 15,
    },
    {
      id: 201,
      price: 5,
    }
  ],
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.updateProductCurrencyPrices(
  productPricePointId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "currency_prices": [
    {
      "id": 123,
      "currency": "EUR",
      "price": 100,
      "formatted_price": "€123,00",
      "product_price_point_id": 32669,
      "role": "baseline"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorArrayMapResponseError`](../../doc/models/error-array-map-response-error.md) |


# Promote Product Price Point to Default

Use this endpoint to make a product price point the default for the product.

Note: Custom product price points are not able to be set as the default for a product.

```ts
async promoteProductPricePointToDefault(
  productId: number,
  pricePointId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `number` | Template, Required | The Chargify id of the product to which the price point belongs |
| `pricePointId` | `number` | Template, Required | The Chargify id of the product price point |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductResponse`](../../doc/models/product-response.md)

## Example Usage

```ts
const productId = 202;

const pricePointId = 10;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.promoteProductPricePointToDefault(
  productId,
  pricePointId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "product": {
    "id": 29778,
    "name": "Educational",
    "handle": "educational",
    "description": null,
    "accounting_code": null,
    "request_credit_card": true,
    "expiration_interval": 12,
    "expiration_interval_unit": "month",
    "created_at": "2023-12-01T06:56:12-05:00",
    "updated_at": "2023-12-01T06:56:26-05:00",
    "price_in_cents": 100,
    "interval": 2,
    "interval_unit": "month",
    "initial_charge_in_cents": 120000,
    "trial_price_in_cents": 4900,
    "trial_interval": 1,
    "trial_interval_unit": "month",
    "archived_at": null,
    "require_credit_card": true,
    "return_params": null,
    "taxable": false,
    "update_return_url": null,
    "tax_code": null,
    "initial_charge_after_trial": false,
    "version_number": 1,
    "update_return_params": null,
    "default_product_price_point_id": 32395,
    "request_billing_address": false,
    "require_billing_address": false,
    "require_shipping_address": false,
    "use_site_exchange_rate": true,
    "item_category": null,
    "product_price_point_id": 32395,
    "product_price_point_name": "Default",
    "product_price_point_handle": "uuid:8c878f50-726e-013c-c71b-0286551bb34f",
    "product_family": {
      "id": 933860,
      "name": "Acme Projects",
      "description": "Amazing project management tool",
      "handle": "acme-projects",
      "accounting_code": null,
      "created_at": "2023-12-01T06:56:12-05:00",
      "updated_at": "2023-12-01T06:56:12-05:00"
    },
    "public_signup_pages": []
  }
}
```


# Create Product Price Points

Use this endpoint to create multiple product price points in one request.

```ts
async createProductPricePoints(
  productId: number,
  body?: BulkCreateProductPricePointsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BulkCreateProductPricePointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `number` | Template, Required | The Chargify id of the product to which the price points belong |
| `body` | [`BulkCreateProductPricePointsRequest \| undefined`](../../doc/models/bulk-create-product-price-points-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BulkCreateProductPricePointsResponse`](../../doc/models/bulk-create-product-price-points-response.md)

## Example Usage

```ts
const productId = 202;

const body: BulkCreateProductPricePointsRequest = {
  pricePoints: [
    {
      name: 'Educational',
      priceInCents: BigInt(1000),
      interval: 1,
      intervalUnit: IntervalUnit.Month,
      handle: 'educational',
      trialPriceInCents: BigInt(4900),
      trialInterval: 1,
      trialIntervalUnit: IntervalUnit.Month,
      trialType: 'payment_expected',
      initialChargeInCents: BigInt(120000),
      initialChargeAfterTrial: false,
      expirationInterval: 12,
      expirationIntervalUnit: IntervalUnit.Month,
    },
    {
      name: 'More Educational',
      priceInCents: BigInt(2000),
      interval: 1,
      intervalUnit: IntervalUnit.Month,
      handle: 'more-educational',
      trialPriceInCents: BigInt(4900),
      trialInterval: 1,
      trialIntervalUnit: IntervalUnit.Month,
      trialType: 'payment_expected',
      initialChargeInCents: BigInt(120000),
      initialChargeAfterTrial: false,
      expirationInterval: 12,
      expirationIntervalUnit: IntervalUnit.Month,
    }
  ],
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.createProductPricePoints(
  productId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "price_points": [
    {
      "id": 283,
      "name": "Educational",
      "handle": "educational",
      "price_in_cents": 1000,
      "interval": 1,
      "interval_unit": "month",
      "trial_price_in_cents": 4900,
      "trial_interval": 1,
      "trial_interval_unit": "month",
      "trial_type": "payment_expected",
      "initial_charge_in_cents": 120000,
      "initial_charge_after_trial": false,
      "expiration_interval": 12,
      "expiration_interval_unit": "month",
      "product_id": 901,
      "archived_at": "2023-11-30T06:37:20-05:00",
      "created_at": "2023-11-27T06:37:20-05:00",
      "updated_at": "2023-11-27T06:37:20-05:00"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | `ApiError` |


# Create Product Currency Prices

This endpoint allows you to create currency prices for a given currency that has been defined on the site level in your settings.

When creating currency prices, they need to mirror the structure of your primary pricing. If the product price point defines a trial and/or setup fee, each currency must also define a trial and/or setup fee.

Note: Currency Prices are not able to be created for custom product price points.

```ts
async createProductCurrencyPrices(
  productPricePointId: number,
  body?: CreateProductCurrencyPricesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CurrencyPricesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productPricePointId` | `number` | Template, Required | The Chargify id of the product price point |
| `body` | [`CreateProductCurrencyPricesRequest \| undefined`](../../doc/models/create-product-currency-prices-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CurrencyPricesResponse`](../../doc/models/currency-prices-response.md)

## Example Usage

```ts
const productPricePointId = 234;

const body: CreateProductCurrencyPricesRequest = {
  currencyPrices: [
    {
      currency: 'EUR',
      price: 60,
      role: CurrencyPriceRole.Baseline,
    },
    {
      currency: 'EUR',
      price: 30,
      role: CurrencyPriceRole.Trial,
    },
    {
      currency: 'EUR',
      price: 100,
      role: CurrencyPriceRole.Initial,
    }
  ],
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.createProductCurrencyPrices(
  productPricePointId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "currency_prices": [
    {
      "id": 100,
      "currency": "EUR",
      "price": 123,
      "formatted_price": "€123,00",
      "product_price_point_id": 32669,
      "role": "baseline"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorArrayMapResponseError`](../../doc/models/error-array-map-response-error.md) |


# List Product Price Points

Use this endpoint to retrieve a list of product price points.

```ts
async listProductPricePoints(
  productId: ListProductPricePointsInputProductId,
  page?: number,
  perPage?: number,
  currencyPrices?: boolean,
  filterType?: PricePointType[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProductPricePointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | [`ListProductPricePointsInputProductId`](../../doc/models/containers/list-product-price-points-input-product-id.md) | Template, Required | This is a container for one-of cases. |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`. |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 10. The maximum allowed values is 200; any per_page value over 200 will be changed to 200. |
| `currencyPrices` | `boolean \| undefined` | Query, Optional | When fetching a product's price points, if you have defined multiple currencies at the site level, you can optionally pass the ?currency_prices=true query param to include an array of currency price data in the response. If the product price point is set to use_site_exchange_rate: true, it will return pricing based on the current exchange rate. If the flag is set to false, it will return all of the defined prices for each currency. |
| `filterType` | [`PricePointType[] \| undefined`](../../doc/models/price-point-type.md) | Query, Optional | Use in query: `filter[type]=catalog,default`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListProductPricePointsResponse`](../../doc/models/list-product-price-points-response.md)

## Example Usage

```ts
const collect = {Liquid error: Value cannot be null. (Parameter 'key')
  productId: 124,
  page: 2,
  perPage: 10
}
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.listProductPricePoints(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "price_points": [
    {
      "id": 283,
      "name": "Educational",
      "handle": "educational",
      "price_in_cents": 1000,
      "interval": 1,
      "interval_unit": "month",
      "trial_price_in_cents": 4900,
      "trial_interval": 1,
      "trial_interval_unit": "month",
      "trial_type": "payment_expected",
      "initial_charge_in_cents": 120000,
      "initial_charge_after_trial": false,
      "expiration_interval": 12,
      "expiration_interval_unit": "month",
      "product_id": 901,
      "archived_at": "2023-11-30T06:37:20-05:00",
      "created_at": "2023-11-27T06:37:20-05:00",
      "updated_at": "2023-11-27T06:37:20-05:00"
    }
  ]
}
```


# Update Product Price Point

Use this endpoint to update a product price point.

Note: Custom product price points are not able to be updated.

```ts
async updateProductPricePoint(
  productId: UpdateProductPricePointProductId,
  pricePointId: UpdateProductPricePointPricePointId,
  body?: UpdateProductPricePointRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | [`UpdateProductPricePointProductId`](../../doc/models/containers/update-product-price-point-product-id.md) | Template, Required | This is a container for one-of cases. |
| `pricePointId` | [`UpdateProductPricePointPricePointId`](../../doc/models/containers/update-product-price-point-price-point-id.md) | Template, Required | This is a container for one-of cases. |
| `body` | [`UpdateProductPricePointRequest \| undefined`](../../doc/models/update-product-price-point-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductPricePointResponse`](../../doc/models/product-price-point-response.md)

## Example Usage

```ts
const productId: UpdateProductPricePointProductId = 124;

const pricePointId: UpdateProductPricePointPricePointId = 188;

const body: UpdateProductPricePointRequest = {
  pricePoint: {
    handle: 'educational',
    priceInCents: BigInt(1250),
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.updateProductPricePoint(
  productId,
  pricePointId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "price_point": {
    "id": 283,
    "name": "Educational",
    "handle": "educational",
    "price_in_cents": 1000,
    "interval": 1,
    "interval_unit": "month",
    "trial_price_in_cents": 4900,
    "trial_interval": 1,
    "trial_interval_unit": "month",
    "trial_type": "payment_expected",
    "initial_charge_in_cents": 120000,
    "initial_charge_after_trial": false,
    "expiration_interval": 12,
    "expiration_interval_unit": "month",
    "product_id": 901,
    "archived_at": "2023-11-30T06:37:20-05:00",
    "created_at": "2023-11-27T06:37:20-05:00",
    "updated_at": "2023-11-27T06:37:20-05:00"
  }
}
```


# Read Product Price Point

Use this endpoint to retrieve details for a specific product price point.

```ts
async readProductPricePoint(
  productId: ReadProductPricePointProductId,
  pricePointId: ReadProductPricePointPricePointId,
  currencyPrices?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | [`ReadProductPricePointProductId`](../../doc/models/containers/read-product-price-point-product-id.md) | Template, Required | This is a container for one-of cases. |
| `pricePointId` | [`ReadProductPricePointPricePointId`](../../doc/models/containers/read-product-price-point-price-point-id.md) | Template, Required | This is a container for one-of cases. |
| `currencyPrices` | `boolean \| undefined` | Query, Optional | When fetching a product's price points, if you have defined multiple currencies at the site level, you can optionally pass the ?currency_prices=true query param to include an array of currency price data in the response. If the product price point is set to use_site_exchange_rate: true, it will return pricing based on the current exchange rate. If the flag is set to false, it will return all of the defined prices for each currency. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductPricePointResponse`](../../doc/models/product-price-point-response.md)

## Example Usage

```ts
const productId: ReadProductPricePointProductId = 124;

const pricePointId: ReadProductPricePointPricePointId = 188;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await productPricePointsController.readProductPricePoint(
  productId,
  pricePointId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "price_point": {
    "id": 283,
    "name": "Educational",
    "handle": "educational",
    "price_in_cents": 1000,
    "interval": 1,
    "interval_unit": "month",
    "trial_price_in_cents": 4900,
    "trial_interval": 1,
    "trial_interval_unit": "month",
    "trial_type": "payment_expected",
    "initial_charge_in_cents": 120000,
    "initial_charge_after_trial": false,
    "expiration_interval": 12,
    "expiration_interval_unit": "month",
    "product_id": 901,
    "archived_at": "2023-11-30T06:37:20-05:00",
    "created_at": "2023-11-27T06:37:20-05:00",
    "updated_at": "2023-11-27T06:37:20-05:00"
  }
}
```

