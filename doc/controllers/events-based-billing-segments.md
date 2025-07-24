# Events-Based Billing Segments

```ts
const eventsBasedBillingSegmentsController = new EventsBasedBillingSegmentsController(client);
```

## Class Name

`EventsBasedBillingSegmentsController`

## Methods

* [Create Segment](../../doc/controllers/events-based-billing-segments.md#create-segment)
* [List Segments for Price Point](../../doc/controllers/events-based-billing-segments.md#list-segments-for-price-point)
* [Update Segment](../../doc/controllers/events-based-billing-segments.md#update-segment)
* [Delete Segment](../../doc/controllers/events-based-billing-segments.md#delete-segment)
* [Bulk Create Segments](../../doc/controllers/events-based-billing-segments.md#bulk-create-segments)
* [Bulk Update Segments](../../doc/controllers/events-based-billing-segments.md#bulk-update-segments)


# Create Segment

This endpoint creates a new Segment for a Component with segmented Metric. It allows you to specify properties to bill upon and prices for each Segment. You can only pass as many "property_values" as the related Metric has segmenting properties defined.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

```ts
async createSegment(
  componentId: string,
  pricePointId: string,
  body?: CreateSegmentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SegmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `string` | Template, Required | ID or Handle for the Component |
| `pricePointId` | `string` | Template, Required | ID or Handle for the Price Point belonging to the Component |
| `body` | [`CreateSegmentRequest \| undefined`](../../doc/models/create-segment-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SegmentResponse`](../../doc/models/segment-response.md).

## Example Usage

```ts
const componentId = 'component_id8';

const pricePointId = 'price_point_id8';

const body: CreateSegmentRequest = {
  segment: {
    pricingScheme: PricingScheme.Volume,
    segmentProperty1Value: 'France',
    segmentProperty2Value: 'Spain',
    prices: [
      {
        unitPrice: 0.19,
        startingQuantity: 1,
        endingQuantity: 10000,
      },
      {
        unitPrice: 0.09,
        startingQuantity: 10001,
      }
    ],
  },
};

try {
  const { result, ...httpResponse } = await eventsBasedBillingSegmentsController.createSegment(
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
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`EventBasedBillingSegmentErrorsError`](../../doc/models/event-based-billing-segment-errors-error.md) |


# List Segments for Price Point

This endpoint allows you to fetch Segments created for a given Price Point. They will be returned in the order of creation.

You can pass `page` and `per_page` parameters in order to access all of the segments. By default it will return `30` records. You can set `per_page` to `200` at most.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

```ts
async listSegmentsForPricePoint(
  {
    componentId,
    pricePointId,
    page,
    perPage,
    filter,
  }: {
    componentId: string;
    pricePointId: string;
    page?: number;
    perPage?: number;
    filter?: ListSegmentsFilter;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListSegmentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `string` | Template, Required | ID or Handle for the Component |
| `pricePointId` | `string` | Template, Required | ID or Handle for the Price Point belonging to the Component |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 30. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br><br>**Default**: `30`<br><br>**Constraints**: `<= 200` |
| `filter` | [`ListSegmentsFilter \| undefined`](../../doc/models/list-segments-filter.md) | Query, Optional | Filter to use for List Segments for a Price Point operation |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListSegmentsResponse`](../../doc/models/list-segments-response.md).

## Example Usage

```ts
const collect = {
  componentId: 'component_id8',
  pricePointId: 'price_point_id8',
  page: 2,
  perPage: 50,
  filter: {
    segmentProperty1Value: 'EU',
  }
}

try {
  const { result, ...httpResponse } = await eventsBasedBillingSegmentsController.listSegmentsForPricePoint(collect);
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
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`EventBasedBillingListSegmentsErrorsError`](../../doc/models/event-based-billing-list-segments-errors-error.md) |


# Update Segment

This endpoint updates a single Segment for a Component with a segmented Metric. It allows you to update the pricing for the segment.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

```ts
async updateSegment(
  componentId: string,
  pricePointId: string,
  id: number,
  body?: UpdateSegmentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SegmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `string` | Template, Required | ID or Handle of the Component |
| `pricePointId` | `string` | Template, Required | ID or Handle of the Price Point belonging to the Component |
| `id` | `number` | Template, Required | The ID of the Segment |
| `body` | [`UpdateSegmentRequest \| undefined`](../../doc/models/update-segment-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SegmentResponse`](../../doc/models/segment-response.md).

## Example Usage

```ts
const componentId = 'component_id8';

const pricePointId = 'price_point_id8';

const id = 60;

try {
  const { result, ...httpResponse } = await eventsBasedBillingSegmentsController.updateSegment(
    componentId,
    pricePointId,
    id
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
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`EventBasedBillingSegmentErrorsError`](../../doc/models/event-based-billing-segment-errors-error.md) |


# Delete Segment

This endpoint allows you to delete a Segment with specified ID.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

```ts
async deleteSegment(
  componentId: string,
  pricePointId: string,
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `string` | Template, Required | ID or Handle of the Component |
| `pricePointId` | `string` | Template, Required | ID or Handle of the Price Point belonging to the Component |
| `id` | `number` | Template, Required | The ID of the Segment |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const componentId = 'component_id8';

const pricePointId = 'price_point_id8';

const id = 60;

try {
  const { result, ...httpResponse } = await eventsBasedBillingSegmentsController.deleteSegment(
    componentId,
    pricePointId,
    id
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
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | `ApiError` |


# Bulk Create Segments

This endpoint allows you to create multiple segments in one request. The array of segments can contain up to `2000` records.

If any of the records contain an error the whole request would fail and none of the requested segments get created. The error response contains a message for only the one segment that failed validation, with the corresponding index in the array.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

```ts
async bulkCreateSegments(
  componentId: string,
  pricePointId: string,
  body?: BulkCreateSegments,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListSegmentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `string` | Template, Required | ID or Handle for the Component |
| `pricePointId` | `string` | Template, Required | ID or Handle for the Price Point belonging to the Component |
| `body` | [`BulkCreateSegments \| undefined`](../../doc/models/bulk-create-segments.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListSegmentsResponse`](../../doc/models/list-segments-response.md).

## Example Usage

```ts
const componentId = 'component_id8';

const pricePointId = 'price_point_id8';

try {
  const { result, ...httpResponse } = await eventsBasedBillingSegmentsController.bulkCreateSegments(
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`EventBasedBillingSegmentError`](../../doc/models/event-based-billing-segment-error-1.md) |


# Bulk Update Segments

This endpoint allows you to update multiple segments in one request. The array of segments can contain up to `1000` records.

If any of the records contain an error the whole request would fail and none of the requested segments get updated. The error response contains a message for only the one segment that failed validation, with the corresponding index in the array.

You may specify component and/or price point by using either the numeric ID or the `handle:gold` syntax.

```ts
async bulkUpdateSegments(
  componentId: string,
  pricePointId: string,
  body?: BulkUpdateSegments,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListSegmentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `string` | Template, Required | ID or Handle for the Component |
| `pricePointId` | `string` | Template, Required | ID or Handle for the Price Point belonging to the Component |
| `body` | [`BulkUpdateSegments \| undefined`](../../doc/models/bulk-update-segments.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListSegmentsResponse`](../../doc/models/list-segments-response.md).

## Example Usage

```ts
const componentId = 'component_id8';

const pricePointId = 'price_point_id8';

try {
  const { result, ...httpResponse } = await eventsBasedBillingSegmentsController.bulkUpdateSegments(
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Not Found | `ApiError` |
| 422 | Unprocessable Entity (WebDAV) | [`EventBasedBillingSegmentError`](../../doc/models/event-based-billing-segment-error-1.md) |

