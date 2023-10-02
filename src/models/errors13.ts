/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Segments1, segments1Schema } from './segments1';

export interface Errors13 {
  segments: Segments1;
}

export const errors13Schema: Schema<Errors13> = object({
  segments: ['segments', lazy(() => segments1Schema)],
});
