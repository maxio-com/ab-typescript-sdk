/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Movement, movementSchema } from './movement';

export interface ListMRRResponseResult {
  page?: number;
  perPage?: number;
  totalPages?: number;
  totalEntries?: number;
  currency?: string;
  currencySymbol?: string;
  movements?: Movement[];
}

export const listMRRResponseResultSchema: Schema<ListMRRResponseResult> = object(
  {
    page: ['page', optional(number())],
    perPage: ['per_page', optional(number())],
    totalPages: ['total_pages', optional(number())],
    totalEntries: ['total_entries', optional(number())],
    currency: ['currency', optional(string())],
    currencySymbol: ['currency_symbol', optional(string())],
    movements: ['movements', optional(array(lazy(() => movementSchema)))],
  }
);
