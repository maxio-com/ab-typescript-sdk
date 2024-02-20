import { createClient, createInvalidClient } from './config';
import {
  Endpoint,
  WebhooksController,
  WebhookSubscription,
} from 'advanced-billing-sdk';

describe('webhooks Controller', () => {
  const validClient = createClient();
  const invalidClient = createInvalidClient();

  describe('List Webhooks', () => {
    test('should get a webhooks associated to client site', async () => {
      const webHooksController = new WebhooksController(validClient);
      const { statusCode, result } = await webHooksController.listWebhooks({});
      expect(statusCode).toBe(200);
      expect(result.length >= 0).toBeTruthy();
    });
    test('should thrown an error when user is unauthorized to list webhooks', async () => {
      const webHooksController = new WebhooksController(invalidClient);
      const promise = webHooksController.listWebhooks({});
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('Enable Webhooks', () => {
    test('should enable webhooks associated to client site', async () => {
      const webHooksController = new WebhooksController(validClient);
      const payload = { webhooksEnabled: true };
      const { statusCode, result } =
        await webHooksController.enableWebhooks(payload);
      expect(statusCode).toBe(200);
      expect(result.webhooksEnabled).toBeTruthy();
    });
    test('should thrown an error on enable webhook when user is unauthorized', async () => {
      const webHooksController = new WebhooksController(invalidClient);
      const payload = { webhooksEnabled: true };
      const promise = webHooksController.enableWebhooks(payload);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('Replay Webhook', () => {
    test('should replayed webhooks associated to client site', async () => {
      const webHooksController = new WebhooksController(validClient);
      const listEndpointsResponse = await webHooksController.listEndpoints();
      const idsResponse = listEndpointsResponse.result.map(
        (endpoint: Endpoint) => BigInt(endpoint.id || 0)
      );
      const payload = { ids: idsResponse };
      const { statusCode, result } =
        await webHooksController.replayWebhooks(payload);
      expect(statusCode).toBe(200);
      expect(result.status).toEqual('ok');
    });
    test('should thrown an error on replay webhooks when user is unauthorized', async () => {
      const webHooksController = new WebhooksController(invalidClient);
      const payload = {
        ids: [BigInt(123456789), BigInt(123456788)],
      };
      const promise = webHooksController.replayWebhooks(payload);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('Create Endpoint', () => {
    test('should throw an error when the user is Unauthorized to create endpoint on webhook controller', async () => {
      const webHooksController = new WebhooksController(invalidClient);
      const payload = {
        endpoint: {
          url: 'https://your.site/webhooks',
          webhookSubscriptions: [
            WebhookSubscription.PaymentFailure,
            WebhookSubscription.PaymentSuccess,
          ],
        },
      };
      const promise = webHooksController.createEndpoint(payload);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('List Endpoint', () => {
    test('should get a endpoint list associate to client', async () => {
      const webHooksController = new WebhooksController(validClient);
      const { statusCode, result } = await webHooksController.listEndpoints();
      const urlsResponse = result.map((endpoint: Endpoint) => endpoint.url);
      expect(statusCode).toBe(200);
      expect(result).toHaveLength(5);
      expect(
        urlsResponse.includes(
          'https://play.svix.com/in/e_94XdF-OwN3EaTKty4izJDWRAH3V/'
        )
      ).toBeTruthy();
      expect(urlsResponse.includes('https://www.google.com/')).toBeTruthy();
    });
    test('should throw an error when the user is Unauthorized to list endpoint', async () => {
      const webHooksController = new WebhooksController(invalidClient);
      const promise = webHooksController.listEndpoints();
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('Update Endpoint', () => {
    test('should put a endpoint by endpoint ID associate to client site', async () => {
      const webHooksController = new WebhooksController(validClient);
      const response = await webHooksController.listEndpoints();
      const idsResponse = response.result.map((endpoint: Endpoint) =>
        Number(endpoint.id)
      );
      const endpointId = idsResponse[0];
      const payload = {
        endpoint: {
          url: 'https://google.com/',
          webhookSubscriptions: [
            WebhookSubscription.PaymentFailure,
            WebhookSubscription.PaymentSuccess,
            WebhookSubscription.RefundFailure,
          ],
        },
      };
      const { statusCode, result } = await webHooksController.updateEndpoint(
        endpointId,
        payload
      );
      const endpointUpdated = result.endpoint || {};
      const subscriptionsUpdated = endpointUpdated.webhookSubscriptions || [];
      expect(statusCode).toBe(200);
      expect(endpointUpdated.id).toBe(endpointId);
      expect(endpointUpdated.url).toEqual(payload.endpoint.url);
      expect(subscriptionsUpdated).toHaveLength(
        payload.endpoint.webhookSubscriptions.length
      );
      expect(
        subscriptionsUpdated.includes(WebhookSubscription.PaymentFailure)
      ).toBeTruthy();
      expect(
        subscriptionsUpdated.includes(WebhookSubscription.PaymentSuccess)
      ).toBeTruthy();
      expect(
        subscriptionsUpdated.includes(WebhookSubscription.RefundFailure)
      ).toBeTruthy();
    });
    test('should throw an error when the endpoint ID does not exist endpoint list', async () => {
      const webHooksController = new WebhooksController(validClient);
      const invalidEndpointId = 123456789;
      const payload = {
        endpoint: {
          url: 'https://google.com/',
          webhookSubscriptions: [
            WebhookSubscription.PaymentFailure,
            WebhookSubscription.PaymentSuccess,
            WebhookSubscription.RefundFailure,
          ],
        },
      };
      const promise = webHooksController.updateEndpoint(
        invalidEndpointId,
        payload
      );
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
    test('should throw an error when the user is Unauthorized to list endpoint', async () => {
      const webHooksController = new WebhooksController(invalidClient);
      const endpointId = 123456789;
      const payload = {
        endpoint: {
          url: 'https://google.com/',
          webhookSubscriptions: [
            WebhookSubscription.PaymentFailure,
            WebhookSubscription.PaymentSuccess,
            WebhookSubscription.RefundFailure,
          ],
        },
      };
      const promise = webHooksController.updateEndpoint(endpointId, payload);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });
});
