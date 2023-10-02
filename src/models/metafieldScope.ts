/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import { IncludeOptionEnum, includeOptionEnumSchema } from './includeOptionEnum';

/** Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. */
export interface MetafieldScope {
  /** Include (1) or exclude (0) metafields from the csv export. */
  csv?: IncludeOptionEnum;
  /** Include (1) or exclude (0) metafields from invoices. */
  invoices?: IncludeOptionEnum;
  /** Include (1) or exclude (0) metafields from statements. */
  statements?: IncludeOptionEnum;
  /** Include (1) or exclude (0) metafields from the portal. */
  portal?: IncludeOptionEnum;
  /** Include (1) or exclude (0) metafields from being viewable by your ecosystem. */
  publicShow?: IncludeOptionEnum;
  /** Include (1) or exclude (0) metafields from being edited by your ecosystem. */
  publicEdit?: IncludeOptionEnum;
}

export const metafieldScopeSchema: Schema<MetafieldScope> = object({
  csv: ['csv', optional(includeOptionEnumSchema)],
  invoices: ['invoices', optional(includeOptionEnumSchema)],
  statements: ['statements', optional(includeOptionEnumSchema)],
  portal: ['portal', optional(includeOptionEnumSchema)],
  publicShow: ['public_show', optional(includeOptionEnumSchema)],
  publicEdit: ['public_edit', optional(includeOptionEnumSchema)],
});
