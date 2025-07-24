# Component Price Points

```ts
const componentPricePointsController = new ComponentPricePointsController(client);
```

## Class Name

`ComponentPricePointsController`

## Methods

* [Promote Component Price Point to Default](../../doc/controllers/component-price-points.md#promote-component-price-point-to-default)
* [Create Component Price Point](../../doc/controllers/component-price-points.md#create-component-price-point)
* [List Component Price Points](../../doc/controllers/component-price-points.md#list-component-price-points)
* [Bulk Create Component Price Points](../../doc/controllers/component-price-points.md#bulk-create-component-price-points)
* [Update Component Price Point](../../doc/controllers/component-price-points.md#update-component-price-point)
* [Read Component Price Point](../../doc/controllers/component-price-points.md#read-component-price-point)
* [Archive Component Price Point](../../doc/controllers/component-price-points.md#archive-component-price-point)
* [Unarchive Component Price Point](../../doc/controllers/component-price-points.md#unarchive-component-price-point)
* [Create Currency Prices](../../doc/controllers/component-price-points.md#create-currency-prices)
* [Update Currency Prices](../../doc/controllers/component-price-points.md#update-currency-prices)
* [List All Component Price Points](../../doc/controllers/component-price-points.md#list-all-component-price-points)


# Promote Component Price Point to Default

Sets a new default price point for the component. This new default will apply to all new subscriptions going forward - existing subscriptions will remain on their current price point.

See [Price Points Documentation](https://maxio.zendesk.com/hc/en-us/articles/24261191737101-Price-Points-Components) for more information on price points and moving subscriptions between price points.

Note: Custom price points are not able to be set as the default for a component.

```ts
async promoteComponentPricePointToDefault(
  componentId: number,
  pricePointId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component to which the price point belongs |
| `pricePointId` | `number` | Template, Required | The Advanced Billing id of the price point |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ComponentResponse`](../../doc/models/component-response.md).

## Example Usage

```ts
const componentId = 222;

const pricePointId = 10;

try {
  const { result, ...httpResponse } = await componentPricePointsController.promoteComponentPricePointToDefault(
    componentId,
    pricePointId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "component": {
    "id": 292609,
    "name": "Text messages",
    "pricing_scheme": "stairstep",
    "unit_name": "text message",
    "unit_price": null,
    "product_family_id": 528484,
    "price_per_unit_in_cents": null,
    "kind": "metered_component",
    "archived": false,
    "taxable": false,
    "description": null,
    "created_at": "2019-08-02T05:54:53-04:00",
    "prices": [
      {
        "id": 47,
        "component_id": 292609,
        "starting_quantity": 1,
        "ending_quantity": null,
        "unit_price": "1.0",
        "price_point_id": 173,
        "formatted_unit_price": "$1.00"
      }
    ],
    "default_price_point_name": "Original"
  }
}
```


# Create Component Price Point

This endpoint can be used to create a new price point for an existing component.

```ts
async createComponentPricePoint(
  componentId: number,
  body?: CreateComponentPricePointRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component |
| `body` | [`CreateComponentPricePointRequest \| undefined`](../../doc/models/create-component-price-point-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ComponentPricePointResponse`](../../doc/models/component-price-point-response.md).

## Example Usage

```ts
const componentId = 222;

const body: CreateComponentPricePointRequest = {
  pricePoint: {
    name: 'Wholesale',
    pricingScheme: PricingScheme.Stairstep,
    prices: [
      {
        startingQuantity: '1',
        unitPrice: '5.00',
        endingQuantity: '100',
      },
      {
        startingQuantity: '101',
        unitPrice: '4.00',
      }
    ],
    handle: 'wholesale-handle',
    useSiteExchangeRate: false,
  },
};

try {
  const { result, ...httpResponse } = await componentPricePointsController.createComponentPricePoint(
    componentId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorArrayMapResponseError`](../../doc/models/error-array-map-response-error.md) |


# List Component Price Points

Use this endpoint to read current price points that are associated with a component.

You may specify the component by using either the numeric id or the `handle:gold` syntax.

When fetching a component's price points, if you have defined multiple currencies at the site level, you can optionally pass the `?currency_prices=true` query param to include an array of currency price data in the response.

If the price point is set to `use_site_exchange_rate: true`, it will return pricing based on the current exchange rate. If the flag is set to false, it will return all of the defined prices for each currency.

```ts
async listComponentPricePoints(
  {
    componentId,
    currencyPrices,
    page,
    perPage,
    filterType,
  }: {
    componentId: number;
    currencyPrices?: boolean;
    page?: number;
    perPage?: number;
    filterType?: PricePointType[];
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component |
| `currencyPrices` | `boolean \| undefined` | Query, Optional | Include an array of currency price data |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br><br>**Default**: `20`<br><br>**Constraints**: `<= 200` |
| `filterType` | [`PricePointType[] \| undefined`](../../doc/models/price-point-type.md) | Query, Optional | Use in query: `filter[type]=catalog,default`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ComponentPricePointsResponse`](../../doc/models/component-price-points-response.md).

## Example Usage

```ts
const collect = {Liquid error: Value cannot be null. (Parameter 'key')
  componentId: 222,
  page: 2,
  perPage: 50
}

try {
  const { result, ...httpResponse } = await componentPricePointsController.listComponentPricePoints(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
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
      "id": 80,
      "default": false,
      "name": "Wholesale Two",
      "pricing_scheme": "per_unit",
      "component_id": 74,
      "handle": "wholesale-two",
      "archived_at": null,
      "created_at": "2017-07-05T13:55:40-04:00",
      "updated_at": "2017-07-05T13:55:40-04:00",
      "prices": [
        {
          "id": 121,
          "component_id": 74,
          "starting_quantity": 1,
          "ending_quantity": null,
          "unit_price": "5.0"
        }
      ]
    },
    {
      "id": 81,
      "default": false,
      "name": "MSRP",
      "pricing_scheme": "per_unit",
      "component_id": 74,
      "handle": "msrp",
      "archived_at": null,
      "created_at": "2017-07-05T13:55:40-04:00",
      "updated_at": "2017-07-05T13:55:40-04:00",
      "prices": [
        {
          "id": 122,
          "component_id": 74,
          "starting_quantity": 1,
          "ending_quantity": null,
          "unit_price": "4.0"
        }
      ]
    }
  ]
}
```


# Bulk Create Component Price Points

Use this endpoint to create multiple component price points in one request.

```ts
async bulkCreateComponentPricePoints(
  componentId: string,
  body?: CreateComponentPricePointsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `string` | Template, Required | The Advanced Billing id of the component for which you want to fetch price points. |
| `body` | [`CreateComponentPricePointsRequest \| undefined`](../../doc/models/create-component-price-points-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ComponentPricePointsResponse`](../../doc/models/component-price-points-response.md).

## Example Usage

```ts
const componentId = 'component_id8';

const body: CreateComponentPricePointsRequest = {
  pricePoints: [
    {
      name: 'Wholesale',
      pricingScheme: PricingScheme.PerUnit,
      prices: [
        {
          startingQuantity: 1,
          unitPrice: 5,
        }
      ],
      handle: 'wholesale',
    },
    {
      name: 'MSRP',
      pricingScheme: PricingScheme.PerUnit,
      prices: [
        {
          startingQuantity: 1,
          unitPrice: 4,
        }
      ],
      handle: 'msrp',
    },
    {
      name: 'Special Pricing',
      pricingScheme: PricingScheme.PerUnit,
      prices: [
        {
          startingQuantity: 1,
          unitPrice: 5,
        }
      ],
      handle: 'special',
    }
  ],
};

try {
  const { result, ...httpResponse } = await componentPricePointsController.bulkCreateComponentPricePoints(
    componentId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
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
      "id": 80,
      "default": false,
      "name": "Wholesale Two",
      "pricing_scheme": "per_unit",
      "component_id": 74,
      "handle": "wholesale-two",
      "archived_at": null,
      "created_at": "2017-07-05T13:55:40-04:00",
      "updated_at": "2017-07-05T13:55:40-04:00",
      "prices": [
        {
          "id": 121,
          "component_id": 74,
          "starting_quantity": 1,
          "ending_quantity": null,
          "unit_price": "5.0"
        }
      ]
    },
    {
      "id": 81,
      "default": false,
      "name": "MSRP",
      "pricing_scheme": "per_unit",
      "component_id": 74,
      "handle": "msrp",
      "archived_at": null,
      "created_at": "2017-07-05T13:55:40-04:00",
      "updated_at": "2017-07-05T13:55:40-04:00",
      "prices": [
        {
          "id": 122,
          "component_id": 74,
          "starting_quantity": 1,
          "ending_quantity": null,
          "unit_price": "4.0"
        }
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Update Component Price Point

When updating a price point, it's prices can be updated as well by creating new prices or editing / removing existing ones.

Passing in a price bracket without an `id` will attempt to create a new price.

Including an `id` will update the corresponding price, and including the `_destroy` flag set to true along with the `id` will remove that price.

Note: Custom price points cannot be updated directly. They must be edited through the Subscription.

```ts
async updateComponentPricePoint(
  componentId: UpdateComponentPricePointComponentId,
  pricePointId: UpdateComponentPricePointPricePointId,
  body?: UpdateComponentPricePointRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | [`UpdateComponentPricePointComponentId`](../../doc/models/containers/update-component-price-point-component-id.md) | Template, Required | This is a container for one-of cases. |
| `pricePointId` | [`UpdateComponentPricePointPricePointId`](../../doc/models/containers/update-component-price-point-price-point-id.md) | Template, Required | This is a container for one-of cases. |
| `body` | [`UpdateComponentPricePointRequest \| undefined`](../../doc/models/update-component-price-point-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ComponentPricePointResponse`](../../doc/models/component-price-point-response.md).

## Example Usage

```ts
const componentId: UpdateComponentPricePointComponentId = 144;

const pricePointId: UpdateComponentPricePointPricePointId = 188;

const body: UpdateComponentPricePointRequest = {
  pricePoint: {
    name: 'Default',
    prices: [
      {
        id: 1,
        endingQuantity: 100,
        unitPrice: 5,
      },
      {
        id: 2,
        destroy: true,
      },
      {
        unitPrice: 4,
        startingQuantity: 101,
      }
    ],
  },
};

try {
  const { result, ...httpResponse } = await componentPricePointsController.updateComponentPricePoint(
    componentId,
    pricePointId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorArrayMapResponseError`](../../doc/models/error-array-map-response-error.md) |


# Read Component Price Point

Use this endpoint to retrieve details for a specific component price point. You can achieve this by using either the component price point ID or handle.

```ts
async readComponentPricePoint(
  componentId: ReadComponentPricePointComponentId,
  pricePointId: ReadComponentPricePointPricePointId,
  currencyPrices?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | [`ReadComponentPricePointComponentId`](../../doc/models/containers/read-component-price-point-component-id.md) | Template, Required | This is a container for one-of cases. |
| `pricePointId` | [`ReadComponentPricePointPricePointId`](../../doc/models/containers/read-component-price-point-price-point-id.md) | Template, Required | This is a container for one-of cases. |
| `currencyPrices` | `boolean \| undefined` | Query, Optional | Include an array of currency price data |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ComponentPricePointResponse`](../../doc/models/component-price-point-response.md).

## Example Usage

```ts
const componentId: ReadComponentPricePointComponentId = 144;

const pricePointId: ReadComponentPricePointPricePointId = 188;

try {
  const { result, ...httpResponse } = await componentPricePointsController.readComponentPricePoint(
    componentId,
    pricePointId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Archive Component Price Point

A price point can be archived at any time. Subscriptions using a price point that has been archived will continue using it until they're moved to another price point.

```ts
async archiveComponentPricePoint(
  componentId: ArchiveComponentPricePointComponentId,
  pricePointId: ArchiveComponentPricePointPricePointId,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | [`ArchiveComponentPricePointComponentId`](../../doc/models/containers/archive-component-price-point-component-id.md) | Template, Required | This is a container for one-of cases. |
| `pricePointId` | [`ArchiveComponentPricePointPricePointId`](../../doc/models/containers/archive-component-price-point-price-point-id.md) | Template, Required | This is a container for one-of cases. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ComponentPricePointResponse`](../../doc/models/component-price-point-response.md).

## Example Usage

```ts
const componentId: ArchiveComponentPricePointComponentId = 144;

const pricePointId: ArchiveComponentPricePointPricePointId = 188;

try {
  const { result, ...httpResponse } = await componentPricePointsController.archiveComponentPricePoint(
    componentId,
    pricePointId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "price_point": {
    "id": 79,
    "default": false,
    "name": "Wholesale",
    "pricing_scheme": "stairstep",
    "component_id": 74,
    "handle": "wholesale-handle",
    "archived_at": "2017-07-06T15:04:00-04:00",
    "created_at": "2017-07-05T13:44:30-04:00",
    "updated_at": "2017-07-05T13:44:30-04:00",
    "prices": [
      {
        "id": 119,
        "component_id": 74,
        "starting_quantity": 1,
        "ending_quantity": 100,
        "unit_price": "5.0"
      },
      {
        "id": 120,
        "component_id": 74,
        "starting_quantity": 101,
        "ending_quantity": null,
        "unit_price": "4.0"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Unarchive Component Price Point

Use this endpoint to unarchive a component price point.

```ts
async unarchiveComponentPricePoint(
  componentId: number,
  pricePointId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number` | Template, Required | The Advanced Billing id of the component to which the price point belongs |
| `pricePointId` | `number` | Template, Required | The Advanced Billing id of the price point |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ComponentPricePointResponse`](../../doc/models/component-price-point-response.md).

## Example Usage

```ts
const componentId = 222;

const pricePointId = 10;

try {
  const { result, ...httpResponse } = await componentPricePointsController.unarchiveComponentPricePoint(
    componentId,
    pricePointId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "price_point": {
    "id": 79,
    "default": false,
    "name": "Wholesale",
    "pricing_scheme": "stairstep",
    "component_id": 74,
    "handle": "wholesale-handle",
    "archived_at": null,
    "created_at": "2017-07-05T13:44:30-04:00",
    "updated_at": "2017-07-05T13:44:30-04:00",
    "prices": [
      {
        "id": 119,
        "component_id": 74,
        "starting_quantity": 1,
        "ending_quantity": 100,
        "unit_price": "5.0"
      },
      {
        "id": 120,
        "component_id": 74,
        "starting_quantity": 101,
        "ending_quantity": null,
        "unit_price": "4.0"
      }
    ]
  }
}
```


# Create Currency Prices

This endpoint allows you to create currency prices for a given currency that has been defined on the site level in your settings.

When creating currency prices, they need to mirror the structure of your primary pricing. For each price level defined on the component price point, there should be a matching price level created in the given currency.

Note: Currency Prices are not able to be created for custom price points.

```ts
async createCurrencyPrices(
  pricePointId: number,
  body?: CreateCurrencyPricesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentCurrencyPricesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePointId` | `number` | Template, Required | The Advanced Billing id of the price point |
| `body` | [`CreateCurrencyPricesRequest \| undefined`](../../doc/models/create-currency-prices-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ComponentCurrencyPricesResponse`](../../doc/models/component-currency-prices-response.md).

## Example Usage

```ts
const pricePointId = 10;

const body: CreateCurrencyPricesRequest = {
  currencyPrices: [
    {
      currency: 'EUR',
      price: 50,
      priceId: 20,
    },
    {
      currency: 'EUR',
      price: 40,
      priceId: 21,
    }
  ],
};

try {
  const { result, ...httpResponse } = await componentPricePointsController.createCurrencyPrices(
    pricePointId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
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
      "price": "123",
      "formatted_price": "€123,00",
      "price_id": 32669,
      "price_point_id": 25554
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorArrayMapResponseError`](../../doc/models/error-array-map-response-error.md) |


# Update Currency Prices

This endpoint allows you to update currency prices for a given currency that has been defined on the site level in your settings.

Note: Currency Prices are not able to be updated for custom price points.

```ts
async updateCurrencyPrices(
  pricePointId: number,
  body?: UpdateCurrencyPricesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentCurrencyPricesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePointId` | `number` | Template, Required | The Advanced Billing id of the price point |
| `body` | [`UpdateCurrencyPricesRequest \| undefined`](../../doc/models/update-currency-prices-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ComponentCurrencyPricesResponse`](../../doc/models/component-currency-prices-response.md).

## Example Usage

```ts
const pricePointId = 10;

const body: UpdateCurrencyPricesRequest = {
  currencyPrices: [
    {
      id: 100,
      price: 51,
    },
    {
      id: 101,
      price: 41,
    }
  ],
};

try {
  const { result, ...httpResponse } = await componentPricePointsController.updateCurrencyPrices(
    pricePointId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
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
      "price": "123",
      "formatted_price": "€123,00",
      "price_id": 32669,
      "price_point_id": 25554
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorArrayMapResponseError`](../../doc/models/error-array-map-response-error.md) |


# List All Component Price Points

This method allows to retrieve a list of Components Price Points belonging to a Site.

```ts
async listAllComponentPricePoints(
  {
    include,
    page,
    perPage,
    direction,
    filter,
  }: {
    include?: ListComponentsPricePointsInclude;
    page?: number;
    perPage?: number;
    direction?: SortingDirection;
    filter?: ListPricePointsFilter;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListComponentsPricePointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `include` | [`ListComponentsPricePointsInclude \| undefined`](../../doc/models/list-components-price-points-include.md) | Query, Optional | Allows including additional data in the response. Use in query: `include=currency_prices`. |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br><br>**Default**: `20`<br><br>**Constraints**: `<= 200` |
| `direction` | [`SortingDirection \| undefined`](../../doc/models/sorting-direction.md) | Query, Optional | Controls the order in which results are returned.<br>Use in query `direction=asc`. |
| `filter` | [`ListPricePointsFilter \| undefined`](../../doc/models/list-price-points-filter.md) | Query, Optional | Filter to use for List PricePoints operations |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListComponentsPricePointsResponse`](../../doc/models/list-components-price-points-response.md).

## Example Usage

```ts
const collect = {
  include: ListComponentsPricePointsInclude.CurrencyPrices,
  page: 2,
  perPage: 50,
  filter: {
    startDate: '2011-12-17',
    endDate: '2011-12-15',
    startDatetime: '12/19/2011 09:15:30',
    endDatetime: '06/07/2019 17:20:06',
    type: [
      PricePointType.Catalog,
      PricePointType.Default,
      PricePointType.Custom
    ],
    ids: [
      1,
      2,
      3
    ],
  }
}

try {
  const { result, ...httpResponse } = await componentPricePointsController.listAllComponentPricePoints(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
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
      "id": 1,
      "name": "Auto-created",
      "type": "default",
      "pricing_scheme": "per_unit",
      "component_id": 2,
      "handle": "auto-created",
      "archived_at": null,
      "created_at": "2021-02-21T11:05:57-05:00",
      "updated_at": "2021-02-21T11:05:57-05:00",
      "prices": [
        {
          "id": 3,
          "component_id": 2,
          "starting_quantity": 0,
          "ending_quantity": null,
          "unit_price": "1.0",
          "price_point_id": 1,
          "formatted_unit_price": "$1.00",
          "segment_id": null
        }
      ],
      "tax_included": false
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |

