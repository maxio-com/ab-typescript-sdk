/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
} from '../schema';
import { Metadata, metadataSchema } from './metadata';

export interface PaginatedMetadata {
  totalCount?: number;
  currentPage?: number;
  totalPages?: number;
  perPage?: number;
  metadata?: Metadata[];
  [key: string]: unknown;
}

export const paginatedMetadataSchema: Schema<PaginatedMetadata> = expandoObject(
  {
    totalCount: ['total_count', optional(number())],
    currentPage: ['current_page', optional(number())],
    totalPages: ['total_pages', optional(number())],
    perPage: ['per_page', optional(number())],
    metadata: ['metadata', optional(array(lazy(() => metadataSchema)))],
  }
);
