/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface ReactivateSubscriptionGroupRequest {
  resume?: boolean;
  resumeMembers?: boolean;
}

export const reactivateSubscriptionGroupRequestSchema: Schema<ReactivateSubscriptionGroupRequest> = object(
  {
    resume: ['resume', optional(boolean())],
    resumeMembers: ['resume_members', optional(boolean())],
  }
);
