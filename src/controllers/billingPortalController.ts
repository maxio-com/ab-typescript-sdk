/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorListResponseError } from '../errors/errorListResponseError';
import {
  TooManyManagementLinkRequestsError,
} from '../errors/tooManyManagementLinkRequestsError';
import { AutoInvite, autoInviteSchema } from '../models/autoInvite';
import {
  CustomerResponse,
  customerResponseSchema,
} from '../models/customerResponse';
import {
  PortalManagementLink,
  portalManagementLinkSchema,
} from '../models/portalManagementLink';
import {
  ResentInvitation,
  resentInvitationSchema,
} from '../models/resentInvitation';
import {
  RevokedInvitation,
  revokedInvitationSchema,
} from '../models/revokedInvitation';
import { number, optional } from '../schema';
import { BaseController } from './baseController';

export class BillingPortalController extends BaseController {
  /**
   * ## Billing Portal Documentation
   *
   * Full documentation on how the Billing Portal operates within the Chargify UI can be located
   * [here](https://chargify.zendesk.com/hc/en-us/articles/4407648972443).
   *
   * This documentation is focused on how the to configure the Billing Portal Settings, as well as
   * Subscriber Interaction and Merchant Management of the Billing Portal.
   *
   * You can use this endpoint to enable Billing Portal access for a Customer, with the option of sending
   * the Customer an Invitation email at the same time.
   *
   * ## Billing Portal Security
   *
   * If your customer has been invited to the Billing Portal, then they will receive a link to manage
   * their subscription (the “Management URL”) automatically at the bottom of their statements, invoices,
   * and receipts. **This link changes periodically for security and is only valid for 65 days.**
   *
   * If you need to provide your customer their Management URL through other means, you can retrieve it
   * via the API. Because the URL is cryptographically signed with a timestamp, it is not possible for
   * merchants to generate the URL without requesting it from Chargify.
   *
   * In order to prevent abuse & overuse, we ask that you request a new URL only when absolutely
   * necessary. Management URLs are good for 65 days, so you should re-use a previously generated one as
   * much as possible. If you use the URL frequently (such as to display on your website), please **do
   * not** make an API request to Chargify every time.
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
    req.query('auto_invite', mapped.autoInvite);
    req.appendTemplatePath`/portal/customers/${mapped.customerId}/enable.json`;
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(customerResponseSchema, requestOptions);
  }

  /**
   * This method will provide to the API user the exact URL required for a subscriber to access the
   * Billing Portal.
   *
   * ## Rules for Management Link API
   *
   * + When retrieving a management URL, multiple requests for the same customer in a short period will
   * return the **same** URL
   * + We will not generate a new URL for 15 days
   * + You must cache and remember this URL if you are going to need it again within 15 days
   * + Only request a new URL after the `new_link_available_at` date
   * + You are limited to 15 requests for the same URL. If you make more than 15 requests before
   * `new_link_available_at`, you will be blocked from further Management URL requests (with a response
   * code `429`)
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
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    req.throwOn(429, TooManyManagementLinkRequestsError, 'Too Many Requests');
    return req.callAsJson(portalManagementLinkSchema, requestOptions);
  }

  /**
   * You can resend a customer's Billing Portal invitation.
   *
   * If you attempt to resend an invitation 5 times within 30 minutes, you will receive a `422` response
   * with `error` message in the body.
   *
   * If you attempt to resend an invitation when the Billing Portal is already disabled for a Customer,
   * you will receive a `422` error response.
   *
   * If you attempt to resend an invitation when the Billing Portal is already disabled for a Customer,
   * you will receive a `422` error response.
   *
   * If you attempt to resend an invitation when the Customer does not exist a Customer, you will receive
   * a `404` error response.
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
    req.throwOn(404, ApiError, 'Not Found');
    req.throwOn(422, ErrorListResponseError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(resentInvitationSchema, requestOptions);
  }

  /**
   * You can revoke a customer's Billing Portal invitation.
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
    req.throwOn(422, ApiError, 'Unprocessable Entity (WebDAV)');
    return req.callAsJson(revokedInvitationSchema, requestOptions);
  }
}
