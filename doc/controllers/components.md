# Components

```ts
const componentsController = new ComponentsController(client);
```

## Class Name

`ComponentsController`

## Methods

* [Create Component](../../doc/controllers/components.md#create-component)
* [Read Component by Handle](../../doc/controllers/components.md#read-component-by-handle)
* [Read Component by Id](../../doc/controllers/components.md#read-component-by-id)
* [Update Product Family Component](../../doc/controllers/components.md#update-product-family-component)
* [Archive Component](../../doc/controllers/components.md#archive-component)
* [List Components](../../doc/controllers/components.md#list-components)
* [Update Component](../../doc/controllers/components.md#update-component)
* [Update Default Price Point for Component](../../doc/controllers/components.md#update-default-price-point-for-component)
* [List Components for Product Family](../../doc/controllers/components.md#list-components-for-product-family)
* [Create Component Price Point](../../doc/controllers/components.md#create-component-price-point)
* [List Component Price Points](../../doc/controllers/components.md#list-component-price-points)
* [Create Component Price Points](../../doc/controllers/components.md#create-component-price-points)
* [Update Component Price Point](../../doc/controllers/components.md#update-component-price-point)
* [Archive Component Price Point](../../doc/controllers/components.md#archive-component-price-point)
* [Unarchive Component Price Point](../../doc/controllers/components.md#unarchive-component-price-point)
* [Create Currency Prices](../../doc/controllers/components.md#create-currency-prices)
* [Update Currency Prices](../../doc/controllers/components.md#update-currency-prices)
* [List All Component Price Points](../../doc/controllers/components.md#list-all-component-price-points)


# Create Component

This request will create a component definition under the specified product family. These component definitions determine what components are named, how they are measured, and how much they cost.

Components can then be added and “allocated” for each subscription to a product in the product family. These component line-items affect how much a subscription will be charged, depending on the current allocations (i.e. 4 IP Addresses, or SSL “enabled”)

This documentation covers both component definitions and component line-items. Please understand the difference.

Please note that you may not edit components via API. To do so, please log into the application.

### Component Documentation

For more information on components, please see our documentation [here](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405020625677).

For information on how to record component usage against a subscription, please see the following resources:

+ [Proration and Component Allocations](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405020625677#applying-proration-and-recording-components)
+ [Recording component usage against a subscription](https://maxio-chargify.zendesk.com/hc/en-us/articles/5404606587917#recording-component-usage)

```ts
async createComponent(
  productFamilyId: number,
  componentKind: ComponentKindPath,
  body?: CreateComponentBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productFamilyId` | `number` | Template, Required | The Chargify id of the product family to which the component belongs |
| `componentKind` | [`ComponentKindPath`](../../doc/models/component-kind-path.md) | Template, Required | The component kind |
| `body` | [`CreateComponentBody \| undefined`](../../doc/models/containers/create-component-body.md) | Body, Optional | This is a container for one-of cases. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentResponse`](../../doc/models/component-response.md)

## Example Usage

```ts
const productFamilyId = 140;

const componentKind = ComponentKindPath.OnOffComponents;

const body: CreateComponentBody = {
  meteredComponent: {
    name: 'Text messages',
    unitName: 'text message',
    pricingScheme: PricingScheme.Stairstep,
    taxable: false,
    prices: [
      {
        startingQuantity: 1,
        unitPrice: 1,
      }
    ],
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.createComponent(
  productFamilyId,
  componentKind,
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Read Component by Handle

This request will return information regarding a component having the handle you provide. You can identify your components with a handle so you don't have to save or reference the IDs we generate.

```ts
async readComponentByHandle(
  handle: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `handle` | `string` | Query, Required | The handle of the component to find |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentResponse`](../../doc/models/component-response.md)

## Example Usage

```ts
const handle = 'handle6';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.readComponentByHandle(handle);
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
  "component": {
    "id": 399853,
    "name": "Annual Support Services",
    "pricing_scheme": null,
    "unit_name": "on/off",
    "unit_price": "100.0",
    "product_family_id": 997233,
    "price_per_unit_in_cents": null,
    "kind": "on_off_component",
    "archived": false,
    "taxable": true,
    "description": "Prepay for support services",
    "default_price_point_id": 121003,
    "price_point_count": 4,
    "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
    "tax_code": "D0000000",
    "recurring": true,
    "upgrade_charge": null,
    "downgrade_credit": null,
    "created_at": "2019-08-02T05:54:53-04:00",
    "default_price_point_name": "Original",
    "product_family_name": "Chargify"
  }
}
```


# Read Component by Id

This request will return information regarding a component from a specific product family.

You may read the component by either the component's id or handle. When using the handle, it must be prefixed with `handle:`.

```ts
async readComponentById(
  productFamilyId: number,
  componentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productFamilyId` | `number` | Template, Required | The Chargify id of the product family to which the component belongs |
| `componentId` | `string` | Template, Required | Either the Chargify id of the component or the handle for the component prefixed with `handle:`<br>**Constraints**: *Pattern*: `/\A(?:\d+\|handle:(?:uuid:\|[a-z])(?:\w\|-)+)\z/` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentResponse`](../../doc/models/component-response.md)

## Example Usage

```ts
const productFamilyId = 140;

const componentId = 'component_id8';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.readComponentById(
  productFamilyId,
  componentId
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
  "component": {
    "id": 399853,
    "name": "Annual Support Services",
    "pricing_scheme": null,
    "unit_name": "on/off",
    "unit_price": "100.0",
    "product_family_id": 997233,
    "price_per_unit_in_cents": null,
    "kind": "on_off_component",
    "archived": false,
    "taxable": true,
    "description": "Prepay for support services",
    "default_price_point_id": 121003,
    "price_point_count": 4,
    "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
    "tax_code": "D0000000",
    "recurring": true,
    "upgrade_charge": null,
    "downgrade_credit": null,
    "created_at": "2019-08-02T05:54:53-04:00",
    "default_price_point_name": "Original",
    "product_family_name": "Chargify"
  }
}
```


# Update Product Family Component

This request will update a component from a specific product family.

You may read the component by either the component's id or handle. When using the handle, it must be prefixed with `handle:`.

```ts
async updateProductFamilyComponent(
  productFamilyId: number,
  componentId: string,
  body?: UpdateComponentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productFamilyId` | `number` | Template, Required | The Chargify id of the product family to which the component belongs |
| `componentId` | `string` | Template, Required | Either the Chargify id of the component or the handle for the component prefixed with `handle:`<br>**Constraints**: *Pattern*: `/\A(?:\d+\|handle:(?:uuid:\|[a-z])(?:\w\|-)+)\z/` |
| `body` | [`UpdateComponentRequest \| undefined`](../../doc/models/update-component-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentResponse`](../../doc/models/component-response.md)

## Example Usage

```ts
const productFamilyId = 140;

const componentId = 'component_id8';

const body: UpdateComponentRequest = {
  component: {
    itemCategory: ItemCategory.EnumBusinessSoftware,
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.updateProductFamilyComponent(
  productFamilyId,
  componentId,
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
  "component": {
    "id": 399853,
    "name": "Annual Support Services",
    "pricing_scheme": null,
    "unit_name": "on/off",
    "unit_price": "100.0",
    "product_family_id": 997233,
    "price_per_unit_in_cents": null,
    "kind": "on_off_component",
    "archived": false,
    "taxable": true,
    "description": "Prepay for support services",
    "default_price_point_id": 121003,
    "price_point_count": 4,
    "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
    "tax_code": "D0000000",
    "recurring": true,
    "upgrade_charge": null,
    "downgrade_credit": null,
    "created_at": "2019-08-02T05:54:53-04:00",
    "default_price_point_name": "Original",
    "product_family_name": "Chargify"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Archive Component

Sending a DELETE request to this endpoint will archive the component. All current subscribers will be unffected; their subscription/purchase will continue to be charged as usual.

```ts
async archiveComponent(
  productFamilyId: number,
  componentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productFamilyId` | `number` | Template, Required | The Chargify id of the product family to which the component belongs |
| `componentId` | `string` | Template, Required | Either the Chargify id of the component or the handle for the component prefixed with `handle:`<br>**Constraints**: *Pattern*: `/\A(?:\d+\|handle:(?:uuid:\|[a-z])(?:\w\|-)+)\z/` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentResponse`](../../doc/models/component-response.md)

## Example Usage

```ts
const productFamilyId = 140;

const componentId = 'component_id8';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.archiveComponent(
  productFamilyId,
  componentId
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
  "component": {
    "id": 25407138,
    "name": "cillum aute",
    "pricing_scheme": "in incididu",
    "unit_name": "nulla in",
    "unit_price": "Excepteur veniam",
    "product_family_id": -56705047,
    "kind": "prepaid_usage_component",
    "archived": true,
    "taxable": false,
    "description": "reprehenderit laborum qui fugiat",
    "default_price_point_id": -64328176,
    "price_point_count": 15252407,
    "price_points_url": "dolor mollit consequat",
    "tax_code": "ea nisi",
    "recurring": false,
    "created_at": "dolor qui deserunt tempor",
    "default_price_point_name": "cupidatat Lorem non aliqua",
    "product_family_name": "do elit",
    "hide_date_range_on_invoice": false
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# List Components

This request will return a list of components for a site.

```ts
async listComponents(
  dateField?: BasicDateField,
  startDate?: string,
  endDate?: string,
  startDatetime?: string,
  endDatetime?: string,
  includeArchived?: boolean,
  page?: number,
  perPage?: number,
  filterIds?: string[],
  filterUseSiteExchangeRate?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateField` | [`BasicDateField \| undefined`](../../doc/models/basic-date-field.md) | Query, Optional | The type of filter you would like to apply to your search. |
| `startDate` | `string \| undefined` | Query, Optional | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| `endDate` | `string \| undefined` | Query, Optional | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| `startDatetime` | `string \| undefined` | Query, Optional | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |
| `endDatetime` | `string \| undefined` | Query, Optional | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date.  optional |
| `includeArchived` | `boolean \| undefined` | Query, Optional | Include archived items |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br>**Default**: `20`<br>**Constraints**: `<= 200` |
| `filterIds` | `string[] \| undefined` | Query, Optional | Allows fetching components with matching id based on provided value. Use in query `filter[ids]=1,2,3`. |
| `filterUseSiteExchangeRate` | `boolean \| undefined` | Query, Optional | Allows fetching components with matching use_site_exchange_rate based on provided value (refers to default price point). Use in query `filter[use_site_exchange_rate]=true`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentResponse[]`](../../doc/models/component-response.md)

## Example Usage

```ts
const collect = {Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')
  dateField: BasicDateField.UpdatedAt,
  page: 2,
  perPage: 50
}
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.listComponents(collect);
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
[
  {
    "component": {
      "id": 399850,
      "name": "$1.00 component",
      "pricing_scheme": "per_unit",
      "unit_name": "Component",
      "unit_price": "1.0",
      "product_family_id": 997233,
      "price_per_unit_in_cents": null,
      "kind": "quantity_based_component",
      "archived": false,
      "taxable": false,
      "description": "Component",
      "default_price_point_id": 121000,
      "prices": [
        {
          "id": 630687,
          "component_id": 399850,
          "starting_quantity": 1,
          "ending_quantity": null,
          "unit_price": "1.0",
          "price_point_id": 121000,
          "formatted_unit_price": "$1.00"
        }
      ],
      "price_point_count": 2,
      "price_points_url": "https://general-goods.chargify.com/components/399850/price_points",
      "tax_code": null,
      "recurring": true,
      "upgrade_charge": null,
      "downgrade_credit": null,
      "created_at": "2019-08-01T09:35:38-04:00",
      "default_price_point_name": "Original",
      "product_family_name": "Chargify",
      "use_site_exchange_rate": true
    }
  },
  {
    "component": {
      "id": 399853,
      "name": "Annual Support Services",
      "pricing_scheme": null,
      "unit_name": "on/off",
      "unit_price": "100.0",
      "product_family_id": 997233,
      "price_per_unit_in_cents": null,
      "kind": "on_off_component",
      "archived": false,
      "taxable": true,
      "description": "Prepay for support services",
      "default_price_point_id": 121003,
      "price_point_count": 4,
      "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
      "tax_code": "D0000000",
      "recurring": true,
      "upgrade_charge": null,
      "downgrade_credit": null,
      "created_at": "2019-08-01T09:35:37-04:00",
      "default_price_point_name": "Original",
      "product_family_name": "Chargify",
      "use_site_exchange_rate": true
    }
  },
  {
    "component": {
      "id": 386937,
      "name": "Cancellation fee",
      "pricing_scheme": null,
      "unit_name": "on/off",
      "unit_price": "35.0",
      "product_family_id": 997233,
      "price_per_unit_in_cents": null,
      "kind": "on_off_component",
      "archived": false,
      "taxable": false,
      "description": "",
      "default_price_point_id": 108307,
      "price_point_count": 1,
      "price_points_url": "https://general-goods.chargify.com/components/386937/price_points",
      "tax_code": null,
      "recurring": true,
      "upgrade_charge": null,
      "downgrade_credit": null,
      "created_at": "2019-08-01T09:35:38-04:00",
      "default_price_point_name": "Original",
      "product_family_name": "Chargify",
      "use_site_exchange_rate": true
    }
  }
]
```


# Update Component

This request will update a component.

You may read the component by either the component's id or handle. When using the handle, it must be prefixed with `handle:`.

```ts
async updateComponent(
  componentId: string,
  body?: UpdateComponentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `string` | Template, Required | The id or handle of the component |
| `body` | [`UpdateComponentRequest \| undefined`](../../doc/models/update-component-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const componentId = 'component_id8';

const body: UpdateComponentRequest = {
  component: {
    itemCategory: ItemCategory.EnumBusinessSoftware,
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.updateComponent(
  componentId,
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


# Update Default Price Point for Component

Sets a new default price point for the component. This new default will apply to all new subscriptions going forward - existing subscriptions will remain on their current price point.

See [Price Points Documentation](https://chargify.zendesk.com/hc/en-us/articles/4407755865883#price-points) for more information on price points and moving subscriptions between price points.

Note: Custom price points are not able to be set as the default for a component.

```ts
async updateDefaultPricePointForComponent(
  componentId: number,
  pricePointId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number` | Template, Required | The Chargify id of the component to which the price point belongs |
| `pricePointId` | `number` | Template, Required | The Chargify id of the price point |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const componentId = 222;

const pricePointId = 10;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.updateDefaultPricePointForComponent(
  componentId,
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


# List Components for Product Family

This request will return a list of components for a particular product family.

```ts
async listComponentsForProductFamily(
  productFamilyId: number,
  includeArchived?: boolean,
  filterIds?: number[],
  page?: number,
  perPage?: number,
  dateField?: BasicDateField,
  endDate?: string,
  endDatetime?: string,
  startDate?: string,
  startDatetime?: string,
  filterUseSiteExchangeRate?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productFamilyId` | `number` | Template, Required | The Chargify id of the product family |
| `includeArchived` | `boolean \| undefined` | Query, Optional | Include archived items. |
| `filterIds` | `number[] \| undefined` | Query, Optional | Allows fetching components with matching id based on provided value. Use in query `filter[ids]=1,2`. |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br>**Default**: `20`<br>**Constraints**: `<= 200` |
| `dateField` | [`BasicDateField \| undefined`](../../doc/models/basic-date-field.md) | Query, Optional | The type of filter you would like to apply to your search. Use in query `date_field=created_at`. |
| `endDate` | `string \| undefined` | Query, Optional | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| `endDatetime` | `string \| undefined` | Query, Optional | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. optional. |
| `startDate` | `string \| undefined` | Query, Optional | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| `startDatetime` | `string \| undefined` | Query, Optional | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |
| `filterUseSiteExchangeRate` | `boolean \| undefined` | Query, Optional | Allows fetching components with matching use_site_exchange_rate based on provided value (refers to default price point). Use in query `filter[use_site_exchange_rate]=true`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentResponse[]`](../../doc/models/component-response.md)

## Example Usage

```ts
const collect = {Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')
  productFamilyId: 140,
  page: 2,
  perPage: 50,
  dateField: BasicDateField.UpdatedAt
}
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.listComponentsForProductFamily(collect);
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
[
  {
    "component": {
      "id": 399850,
      "name": "$1.00 component",
      "pricing_scheme": "per_unit",
      "unit_name": "Component",
      "unit_price": "1.0",
      "product_family_id": 997233,
      "price_per_unit_in_cents": null,
      "kind": "quantity_based_component",
      "archived": false,
      "taxable": false,
      "description": "Component",
      "default_price_point_id": 121000,
      "prices": [
        {
          "id": 630687,
          "component_id": 399850,
          "starting_quantity": 1,
          "ending_quantity": null,
          "unit_price": "1.0",
          "price_point_id": 121000,
          "formatted_unit_price": "$1.00"
        }
      ],
      "price_point_count": 2,
      "price_points_url": "https://general-goods.chargify.com/components/399850/price_points",
      "tax_code": null,
      "recurring": true,
      "upgrade_charge": null,
      "downgrade_credit": null,
      "created_at": "2019-08-01T09:35:38-04:00",
      "default_price_point_name": "Original",
      "product_family_name": "Chargify",
      "use_site_exchange_rate": true
    }
  },
  {
    "component": {
      "id": 399853,
      "name": "Annual Support Services",
      "pricing_scheme": null,
      "unit_name": "on/off",
      "unit_price": "100.0",
      "product_family_id": 997233,
      "price_per_unit_in_cents": null,
      "kind": "on_off_component",
      "archived": false,
      "taxable": true,
      "description": "Prepay for support services",
      "default_price_point_id": 121003,
      "price_point_count": 4,
      "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
      "tax_code": "D0000000",
      "recurring": true,
      "upgrade_charge": null,
      "downgrade_credit": null,
      "created_at": "2019-08-01T09:35:37-04:00",
      "default_price_point_name": "Original",
      "product_family_name": "Chargify",
      "use_site_exchange_rate": true
    }
  },
  {
    "component": {
      "id": 386937,
      "name": "Cancellation fee",
      "pricing_scheme": null,
      "unit_name": "on/off",
      "unit_price": "35.0",
      "product_family_id": 997233,
      "price_per_unit_in_cents": null,
      "kind": "on_off_component",
      "archived": false,
      "taxable": false,
      "description": "",
      "default_price_point_id": 108307,
      "price_point_count": 1,
      "price_points_url": "https://general-goods.chargify.com/components/386937/price_points",
      "tax_code": null,
      "recurring": true,
      "upgrade_charge": null,
      "downgrade_credit": null,
      "created_at": "2019-08-01T09:35:38-04:00",
      "default_price_point_name": "Original",
      "product_family_name": "Chargify",
      "use_site_exchange_rate": true
    }
  }
]
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
| `componentId` | `number` | Template, Required | The Chargify id of the component |
| `body` | [`CreateComponentPricePointRequest \| undefined`](../../doc/models/create-component-price-point-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentPricePointResponse`](../../doc/models/component-price-point-response.md)

## Example Usage

```ts
const componentId = 222;

const body: CreateComponentPricePointRequest = {
  pricePoint: {
    name: 'Wholesale',
    pricingScheme: 'stairstep',
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
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.createComponentPricePoint(
  componentId,
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


# List Component Price Points

Use this endpoint to read current price points that are associated with a component.

You may specify the component by using either the numeric id or the `handle:gold` syntax.

When fetching a component's price points, if you have defined multiple currencies at the site level, you can optionally pass the `?currency_prices=true` query param to include an array of currency price data in the response.

If the price point is set to `use_site_exchange_rate: true`, it will return pricing based on the current exchange rate. If the flag is set to false, it will return all of the defined prices for each currency.

```ts
async listComponentPricePoints(
  componentId: number,
  currencyPrices?: boolean,
  page?: number,
  perPage?: number,
  filterType?: PricePointType[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number` | Template, Required | The Chargify id of the component |
| `currencyPrices` | `boolean \| undefined` | Query, Optional | Include an array of currency price data |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br>**Default**: `20`<br>**Constraints**: `<= 200` |
| `filterType` | [`PricePointType[] \| undefined`](../../doc/models/price-point-type.md) | Query, Optional | Use in query: `filter[type]=catalog,default`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentPricePointsResponse`](../../doc/models/component-price-points-response.md)

## Example Usage

```ts
const collect = {Liquid error: Value cannot be null. (Parameter 'key')
  componentId: 222,
  page: 2,
  perPage: 50
}
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.listComponentPricePoints(collect);
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


# Create Component Price Points

Use this endpoint to create multiple component price points in one request.

```ts
async createComponentPricePoints(
  componentId: string,
  body?: CreateComponentPricePointsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `string` | Template, Required | The Chargify id of the component for which you want to fetch price points. |
| `body` | [`CreateComponentPricePointsRequest \| undefined`](../../doc/models/create-component-price-points-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentPricePointsResponse`](../../doc/models/component-price-points-response.md)

## Example Usage

```ts
const componentId = 'component_id8';

const body: CreateComponentPricePointsRequest = {
  pricePoints: [
    {
      name: 'Wholesale',
      pricingScheme: 'per_unit',
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
      pricingScheme: 'per_unit',
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
      pricingScheme: 'per_unit',
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
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.createComponentPricePoints(
  componentId,
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


# Update Component Price Point

When updating a price point, it's prices can be updated as well by creating new prices or editing / removing existing ones.

Passing in a price bracket without an `id` will attempt to create a new price.

Including an `id` will update the corresponding price, and including the `_destroy` flag set to true along with the `id` will remove that price.

Note: Custom price points cannot be updated directly. They must be edited through the Subscription.

```ts
async updateComponentPricePoint(
  componentId: number,
  pricePointId: number,
  body?: UpdateComponentPricePointRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number` | Template, Required | The Chargify id of the component to which the price point belongs |
| `pricePointId` | `number` | Template, Required | The Chargify id of the price point |
| `body` | [`UpdateComponentPricePointRequest \| undefined`](../../doc/models/update-component-price-point-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentPricePointResponse`](../../doc/models/component-price-point-response.md)

## Example Usage

```ts
const componentId = 222;

const pricePointId = 10;

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
        destroy: 'true',
      },
      {
        unitPrice: 4,
        startingQuantity: 101,
      }
    ],
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.updateComponentPricePoint(
  componentId,
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


# Archive Component Price Point

A price point can be archived at any time. Subscriptions using a price point that has been archived will continue using it until they're moved to another price point.

```ts
async archiveComponentPricePoint(
  componentId: number,
  pricePointId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ComponentPricePointResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number` | Template, Required | The Chargify id of the component to which the price point belongs |
| `pricePointId` | `number` | Template, Required | The Chargify id of the price point |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentPricePointResponse`](../../doc/models/component-price-point-response.md)

## Example Usage

```ts
const componentId = 222;

const pricePointId = 10;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.archiveComponentPricePoint(
  componentId,
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
| `componentId` | `number` | Template, Required | The Chargify id of the component to which the price point belongs |
| `pricePointId` | `number` | Template, Required | The Chargify id of the price point |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ComponentPricePointResponse`](../../doc/models/component-price-point-response.md)

## Example Usage

```ts
const componentId = 222;

const pricePointId = 10;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.unarchiveComponentPricePoint(
  componentId,
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
): Promise<ApiResponse<CurrencyPrice[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePointId` | `number` | Template, Required | The Chargify id of the price point |
| `body` | [`CreateCurrencyPricesRequest \| undefined`](../../doc/models/create-currency-prices-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CurrencyPrice[]`](../../doc/models/currency-price.md)

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
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.createCurrencyPrices(
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


# Update Currency Prices

This endpoint allows you to update currency prices for a given currency that has been defined on the site level in your settings.

Note: Currency Prices are not able to be updated for custom price points.

```ts
async updateCurrencyPrices(
  pricePointId: number,
  body?: UpdateCurrencyPricesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CurrencyPrice[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePointId` | `number` | Template, Required | The Chargify id of the price point |
| `body` | [`UpdateCurrencyPricesRequest \| undefined`](../../doc/models/update-currency-prices-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CurrencyPrice[]`](../../doc/models/currency-price.md)

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
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.updateCurrencyPrices(
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


# List All Component Price Points

This method allows to retrieve a list of Components Price Points belonging to a Site.

```ts
async listAllComponentPricePoints(
  filterDateField?: BasicDateField,
  filterEndDate?: string,
  filterEndDatetime?: string,
  include?: ListComponentsPricePointsInclude,
  page?: number,
  perPage?: number,
  filterStartDate?: string,
  filterStartDatetime?: string,
  filterType?: PricePointType,
  direction?: ListAllComponentPricePointsInputDirection,
  filterIds?: number[],
  filterArchivedAt?: IncludeNotNull,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListComponentsPricePointsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterDateField` | [`BasicDateField \| undefined`](../../doc/models/basic-date-field.md) | Query, Optional | The type of filter you would like to apply to your search. Use in query: `filter[date_field]=created_at`. |
| `filterEndDate` | `string \| undefined` | Query, Optional | The end date (format YYYY-MM-DD) with which to filter the date_field. Returns price points with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. |
| `filterEndDatetime` | `string \| undefined` | Query, Optional | The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns price points with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. |
| `include` | [`ListComponentsPricePointsInclude \| undefined`](../../doc/models/list-components-price-points-include.md) | Query, Optional | Allows including additional data in the response. Use in query: `include=currency_prices`. |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br>**Default**: `20`<br>**Constraints**: `<= 200` |
| `filterStartDate` | `string \| undefined` | Query, Optional | The start date (format YYYY-MM-DD) with which to filter the date_field. Returns price points with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. |
| `filterStartDatetime` | `string \| undefined` | Query, Optional | The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns price points with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. |
| `filterType` | [`PricePointType \| undefined`](../../doc/models/price-point-type.md) | Query, Optional | Allows fetching price points with matching type. Use in query: `filter[type]=custom,catalog`. |
| `direction` | [`ListAllComponentPricePointsInputDirection \| undefined`](../../doc/models/containers/list-all-component-price-points-input-direction.md) | Query, Optional | This is a container for one-of cases. |
| `filterIds` | `number[] \| undefined` | Query, Optional | Allows fetching price points with matching id based on provided values. Use in query: `filter[ids]=1,2,3`. |
| `filterArchivedAt` | [`IncludeNotNull \| undefined`](../../doc/models/include-not-null.md) | Query, Optional | Allows fetching price points only if archived_at is present or not. Use in query: `filter[archived_at]=not_null`. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListComponentsPricePointsResponse`](../../doc/models/list-components-price-points-response.md)

## Example Usage

```ts
const collect = {Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')Liquid error: Value cannot be null. (Parameter 'key')
  include: ListComponentsPricePointsInclude.CurrencyPrices,
  page: 2,
  perPage: 50
}
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await componentsController.listAllComponentPricePoints(collect);
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

