/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core.js';
import { AutoInvite, autoInviteSchema } from '../models/autoInvite.js';
import {
  CustomerResponse,
  customerResponseSchema,
} from '../models/customerResponse.js';
import {
  PortalManagementLink,
  portalManagementLinkSchema,
} from '../models/portalManagementLink.js';
import {
  ResentInvitation,
  resentInvitationSchema,
} from '../models/resentInvitation.js';
import {
  RevokedInvitation,
  revokedInvitationSchema,
} from '../models/revokedInvitation.js';
import { number, optional } from '../schema.js';
import { BaseController } from './baseController.js';
import { ApiError } from '@apimatic/core';
import { ErrorListResponseError } from '../errors/errorListResponseError.js';
import { TooManyManagementLinkRequestsError } from '../errors/tooManyManagementLinkRequestsError.js';

export class BillingPortalController extends BaseController {
  /**
   * Enables Billing Portal access for a customer, with an option to send an invitation email at the same
   * time.
   *
   * ## Billing Portal Security
   *
   * If your customer has been invited to the Billing Portal, they receive a link to manage their
   * subscription (the “Management URL”) automatically at the bottom of their statements, invoices, and
   * receipts. **This link changes periodically for security and is only valid for 65 days.**
   *
   * If you need to provide your customer their Management URL through other means, you can retrieve it
   * [via the API]($e/Billing%20Portal/readBillingPortalLink). Because the URL is cryptographically
   * signed with a timestamp, merchants cannot generate the URL without requesting it through the API.
   *
   * To prevent abuse and overuse, request a new URL only when absolutely necessary. Management URLs are
   * good for 65 days, so you should re-use a previously generated one as much as possible. If you use
   * the URL frequently (such as to display on your website), **do not** make an API request every time.
   *
   * For more information configuring the Billing Portal, see [Billing Portal Overview](https://maxio.
   * zendesk.com/hc/en-us/articles/24252412965133-Billing-Portal-Overview).
   *
   * @param customerId  The Chargify id of the customer
   * @param autoInvite  When set to 1, an Invitation email will be sent to the Customer. When set to 0,
   *                                  or not sent, an email will not be sent. Use in query: `auto_invite=1`.
   * @return Response from the API call
   */
  async enableBillingPortalForCustomer(
    customerId: number,
    autoInvite?: AutoInvite,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      customerId: [customerId, number()],
      autoInvite: [autoInvite, optional(autoInviteSchema)],
    });
    req.query('auto_invite', mapped.autoInvite, commaPrefix);
    req.appendTemplatePath`/portal/customers/${mapped.customerId}/enable.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(customerResponseSchema, requestOptions);
  }

  /**
   * Returns the exact URL required for a subscriber to access the Billing Portal.
   *
   * ## Management Link Request Rules
   *
   * + When retrieving a management URL, multiple requests for the same customer in a short period return
   * the **same** URL
   * + A new URL is not generated for 15 days
   * + You must cache and remember this URL if you are going to need it again within 15 days
   * + Only request a new URL after the `new_link_available_at` date
   * + You are limited to 15 requests for the same URL. If you make more than 15 requests before
   * `new_link_available_at`, you are blocked from further Management URL requests (with a response code
   * `429`).
   *
   * @param customerId  The Chargify id of the customer
   * @return Response from the API call
   */
  async readBillingPortalLink(
    customerId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PortalManagementLink>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ customerId: [customerId, number()] });
    req.appendTemplatePath`/portal/customers/${mapped.customerId}/management_link.json`;
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.throwOn(
      429,
      TooManyManagementLinkRequestsError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(portalManagementLinkSchema, requestOptions);
  }

  /**
   * Resends a customer's Billing Portal invitation.
   *
   * If you attempt to resend an invitation 5 times within 30 minutes, you will receive a `422` response
   * with an `error` message in the body.
   *
   * If you attempt to resend an invitation when the Billing Portal is already disabled for a Customer,
   * you will receive a `422` error response.
   *
   * If you attempt to resend an invitation when the Customer does not exist, you will receive a `404`
   * error response.
   *
   * ## Limitations
   *
   * This endpoint will only return a JSON response.
   *
   * @param customerId  The Chargify id of the customer
   * @return Response from the API call
   */
  async resendBillingPortalInvitation(
    customerId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResentInvitation>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ customerId: [customerId, number()] });
    req.appendTemplatePath`/portal/customers/${mapped.customerId}/invitations/invite.json`;
    req.throwOn(404, ApiError, true, "Not Found:'{$response.body}'");
    req.throwOn(
      422,
      ErrorListResponseError,
      true,
      "HTTP Response Not OK. Status code: {$statusCode}. Response: '{$response.body}'."
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(resentInvitationSchema, requestOptions);
  }

  /**
   * Revokes a customer's Billing Portal invitation.
   *
   * If you attempt to revoke an invitation when the Billing Portal is already disabled for a Customer,
   * you will receive a 422 error response.
   *
   * ## Limitations
   *
   * This endpoint will only return a JSON response.
   *
   * @param customerId  The Chargify id of the customer
   * @return Response from the API call
   */
  async revokeBillingPortalAccess(
    customerId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RevokedInvitation>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ customerId: [customerId, number()] });
    req.appendTemplatePath`/portal/customers/${mapped.customerId}/invitations/revoke.json`;
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(revokedInvitationSchema, requestOptions);
  }
}
