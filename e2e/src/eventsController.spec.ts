import { Environment, EventsController } from 'advanced-billing-sdk';
import { createClient, CONFIG } from './config';
import { createSubscription } from './utils/subscription';

describe('Events Controller', () => {
  let eventsController: EventsController;
  let invalidEventsController: EventsController;

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createClient({
      timeout: 0,
      domain: CONFIG.DOMAIN,
      environment: Environment.Production,
      subdomain: CONFIG.SUBDOMAIN,
      basicAuthUserName: 'invalidKey',
      basicAuthPassword: CONFIG.PASSWORD,
    });
    eventsController = new EventsController(client);
    invalidEventsController = new EventsController(invalidClient);
  });

  describe('List Events for site', () => {
    test('should list events for site', async () => {
      await createSubscription({
        customerReference: 'listevents-product-refrence',
        productFamilyName: 'listevents-product-familyname',
        productHandle: 'listevents-product-handle',
      });

      const listResponse = await eventsController.listEvents({});
      expect(listResponse.statusCode).toBe(200);
      expect(listResponse.result.length >= 4).toBeTruthy();
    });

    test('should throw and 401 error when user sends incorrect credentials', async () => {
      const promise = invalidEventsController.listEvents({});
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('List Events for Subscription', () => {
    test('should list events for subscription when the user sends a valid subscription id', async () => {
      const { subscriptionResponse } = await createSubscription({
        customerReference: 'listeventsbysubscription-product-refrence',
        productFamilyName: 'listeventsbysubscription-product-familyname',
        productHandle: 'listeventsbysubscription-product-handle',
      });
      const subscriptId = subscriptionResponse?.subscription?.id;
      const listResponse = await eventsController.listSubscriptionEvents({
        subscriptionId: subscriptId || 0,
      });
      expect(listResponse.statusCode).toBe(200);
      expect(listResponse.result.length >= 3).toBeTruthy();
    });

    test('should throw and 404 error when user sends non-existent subscription ID', async () => {
      const promise = eventsController.listSubscriptionEvents({
        subscriptionId: 1,
      });
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw and 401 error when user sends incorrect credentials', async () => {
      const promise = invalidEventsController.listSubscriptionEvents({
        subscriptionId: 1000 || 0,
      });
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Get total event count ', () => {
    test('should contain the total count of events', async () => {
      await createSubscription({
        customerReference: 'counteventsbysubscription-product-refrence',
        productFamilyName: 'counteventsbysubscription-product-familyname',
        productHandle: 'counteventsbysubscription-product-handle',
      });
      const listResponse = await eventsController.readEventsCount({});
      const count = listResponse.result?.count || 0;
      expect(listResponse.statusCode).toBe(200);
      expect(count >= 5).toBeTruthy();
    });

    test('should throw and 401 error when user sends incorrect credentials', async () => {
      const promise = invalidEventsController.readEventsCount({});
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});
