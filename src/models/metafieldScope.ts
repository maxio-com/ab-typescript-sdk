/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';
import { IncludeOption, includeOptionSchema } from './includeOption';

/** Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. */
export interface MetafieldScope {
  /** Include (1) or exclude (0) metafields from the csv export. */
  csv?: IncludeOption;
  /** Include (1) or exclude (0) metafields from invoices. */
  invoices?: IncludeOption;
  /** Include (1) or exclude (0) metafields from statements. */
  statements?: IncludeOption;
  /** Include (1) or exclude (0) metafields from the portal. */
  portal?: IncludeOption;
  /** Include (1) or exclude (0) metafields from being viewable by your ecosystem. */
  publicShow?: IncludeOption;
  /** Include (1) or exclude (0) metafields from being edited by your ecosystem. */
  publicEdit?: IncludeOption;
  hosted?: string[];
}

export const metafieldScopeSchema: Schema<MetafieldScope> = object({
  csv: ['csv', optional(includeOptionSchema)],
  invoices: ['invoices', optional(includeOptionSchema)],
  statements: ['statements', optional(includeOptionSchema)],
  portal: ['portal', optional(includeOptionSchema)],
  publicShow: ['public_show', optional(includeOptionSchema)],
  publicEdit: ['public_edit', optional(includeOptionSchema)],
  hosted: ['hosted', optional(array(string()))],
});
