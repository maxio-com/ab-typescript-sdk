# Subscription Notes

```ts
const subscriptionNotesController = new SubscriptionNotesController(client);
```

## Class Name

`SubscriptionNotesController`

## Methods

* [Create Subscription Note](../../doc/controllers/subscription-notes.md#create-subscription-note)
* [List Subscription Notes](../../doc/controllers/subscription-notes.md#list-subscription-notes)
* [Read Subscription Note](../../doc/controllers/subscription-notes.md#read-subscription-note)
* [Update Subscription Note](../../doc/controllers/subscription-notes.md#update-subscription-note)
* [Delete Subscription Note](../../doc/controllers/subscription-notes.md#delete-subscription-note)


# Create Subscription Note

Use the following method to create a note for a subscription.

## How to Use Subscription Notes

Notes allow you to record information about a particular Subscription in a free text format.

If you have structured data such as birth date, color, etc., consider using Metadata instead.

Full documentation on how to use Notes in the Advanced Billing UI can be located [here](https://maxio.zendesk.com/hc/en-us/articles/24251712214413-Subscription-Summary-Overview).

```ts
async createSubscriptionNote(
  subscriptionId: number,
  body?: UpdateSubscriptionNoteRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionNoteResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `body` | [`UpdateSubscriptionNoteRequest \| undefined`](../../doc/models/update-subscription-note-request.md) | Body, Optional | Updatable fields for Subscription Note |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubscriptionNoteResponse`](../../doc/models/subscription-note-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const body: UpdateSubscriptionNoteRequest = {
  note: {
    body: 'New test note.',
    sticky: true,
  },
};

try {
  const { result, ...httpResponse } = await subscriptionNotesController.createSubscriptionNote(
    subscriptionId,
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
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# List Subscription Notes

Use this method to retrieve a list of Notes associated with a Subscription. The response will be an array of Notes.

```ts
async listSubscriptionNotes(
  {
    subscriptionId,
    page,
    perPage,
  }: {
    subscriptionId: number;
    page?: number;
    perPage?: number;
  },
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionNoteResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `page` | `number \| undefined` | Query, Optional | Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.<br>Use in query `page=1`.<br><br>**Default**: `1`<br><br>**Constraints**: `>= 1` |
| `perPage` | `number \| undefined` | Query, Optional | This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.<br>Use in query `per_page=200`.<br><br>**Default**: `20`<br><br>**Constraints**: `<= 200` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubscriptionNoteResponse[]`](../../doc/models/subscription-note-response.md).

## Example Usage

```ts
const collect = {
  subscriptionId: 222,
  page: 2,
  perPage: 50
}

try {
  const { result, ...httpResponse } = await subscriptionNotesController.listSubscriptionNotes(collect);
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
[
  {
    "note": {
      "body": "Test note.",
      "created_at": "2015-06-15T13:26:47-04:00",
      "id": 5,
      "sticky": false,
      "subscription_id": 100046,
      "updated_at": "2015-06-15T13:28:12-04:00"
    }
  },
  {
    "note": {
      "body": "Another test note.",
      "created_at": "2015-06-15T12:04:46-04:00",
      "id": 4,
      "sticky": false,
      "subscription_id": 100046,
      "updated_at": "2015-06-15T13:26:33-04:00"
    }
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Read Subscription Note

Once you have obtained the ID of the note you wish to read, use this method to show a particular note attached to a subscription.

```ts
async readSubscriptionNote(
  subscriptionId: number,
  noteId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionNoteResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `noteId` | `number` | Template, Required | The Advanced Billing id of the note |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubscriptionNoteResponse`](../../doc/models/subscription-note-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const noteId = 66;

try {
  const { result, ...httpResponse } = await subscriptionNotesController.readSubscriptionNote(
    subscriptionId,
    noteId
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
  "note": {
    "body": "Test note.",
    "created_at": "2015-06-15T13:26:47-04:00",
    "id": 5,
    "sticky": false,
    "subscription_id": 100046,
    "updated_at": "2015-06-15T13:28:12-04:00"
  }
}
```


# Update Subscription Note

Use the following method to update a note for a Subscription.

```ts
async updateSubscriptionNote(
  subscriptionId: number,
  noteId: number,
  body?: UpdateSubscriptionNoteRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionNoteResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `noteId` | `number` | Template, Required | The Advanced Billing id of the note |
| `body` | [`UpdateSubscriptionNoteRequest \| undefined`](../../doc/models/update-subscription-note-request.md) | Body, Optional | Updatable fields for Subscription Note |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubscriptionNoteResponse`](../../doc/models/subscription-note-response.md).

## Example Usage

```ts
const subscriptionId = 222;

const noteId = 66;

const body: UpdateSubscriptionNoteRequest = {
  note: {
    body: 'Modified test note.',
    sticky: true,
  },
};

try {
  const { result, ...httpResponse } = await subscriptionNotesController.updateSubscriptionNote(
    subscriptionId,
    noteId,
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
| 422 | Unprocessable Entity (WebDAV) | [`ErrorListResponseError`](../../doc/models/error-list-response-error.md) |


# Delete Subscription Note

Use the following method to delete a note for a Subscription.

```ts
async deleteSubscriptionNote(
  subscriptionId: number,
  noteId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Template, Required | The Chargify id of the subscription |
| `noteId` | `number` | Template, Required | The Advanced Billing id of the note |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const subscriptionId = 222;

const noteId = 66;

try {
  const { result, ...httpResponse } = await subscriptionNotesController.deleteSubscriptionNote(
    subscriptionId,
    noteId
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

