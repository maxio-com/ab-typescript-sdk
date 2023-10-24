/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  ProformaCustomField,
  proformaCustomFieldSchema,
} from './proformaCustomField';

export interface CustomerCustomFieldsChange {
  before?: ProformaCustomField[];
  after?: ProformaCustomField[];
}

export const customerCustomFieldsChangeSchema: Schema<CustomerCustomFieldsChange> = object(
  {
    before: ['before', optional(array(lazy(() => proformaCustomFieldSchema)))],
    after: ['after', optional(array(lazy(() => proformaCustomFieldSchema)))],
  }
);
