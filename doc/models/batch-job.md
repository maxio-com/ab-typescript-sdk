
# Batch Job

## Structure

`BatchJob`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `finishedAt` | `string \| null \| undefined` | Optional | - |
| `rowCount` | `number \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `completed` | `string \| undefined` | Optional | - |

## Example

```ts
import { BatchJob } from '@maxio-com/advanced-billing-sdk';

const batchJob: BatchJob = {
  id: 60,
  finishedAt: '2016-03-13T12:52:32.123Z',
  rowCount: 68,
  createdAt: '2016-03-13T12:52:32.123Z',
  completed: 'completed6',
};
```

