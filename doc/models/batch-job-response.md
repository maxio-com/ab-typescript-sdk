
# Batch Job Response

## Structure

`BatchJobResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batchjob` | [`BatchJob`](../../doc/models/batch-job.md) | Required | - |

## Example

```ts
import { BatchJobResponse } from '@maxio-com/advanced-billing-sdk';

const batchJobResponse: BatchJobResponse = {
  batchjob: {
    id: 54,
    finishedAt: '2016-03-13T12:52:32.123Z',
    rowCount: 62,
    createdAt: '2016-03-13T12:52:32.123Z',
    completed: 'completed4',
  },
};
```

