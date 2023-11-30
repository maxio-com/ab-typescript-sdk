import {
  Environment,
  SubscriptionProductsController,
} from 'advanced-billing-sdk';
import { CONFIG, createClient } from './config';
import {
  createContextForMigration,
  MigrationContext,
} from './utils/subscriptionsProductsController';

describe('Subscriptions Products Controller', () => {
  let context: MigrationContext = {
    productFamilyResponse: null,
    productResponse01: null,
    productResponse02: null,
    subscriptionResponse: null,
  };
  let subscriptionProductsController: SubscriptionProductsController;
  let invalidSubscriptionProductsController: SubscriptionProductsController;
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
    subscriptionProductsController = new SubscriptionProductsController(client);
    invalidSubscriptionProductsController = new SubscriptionProductsController(
      invalidClient
    );
    context = await createContextForMigration();
  });

  describe('Migrate product subscription', () => {
    test('should migrate a subscription correctly', async () => {
      const migrationResponse =
        await subscriptionProductsController.migrateSubscriptionProduct(
          String(context.subscriptionResponse?.subscription?.id),
          {
            migration: {
              productId: context.productResponse02?.product.id,
            },
          }
        );

      expect(migrationResponse.statusCode).toBe(200);
      expect(migrationResponse.result.subscription?.product).toEqual(
        context.productResponse02?.product
      );
    });

    test('should do a preview migration correctly', async () => {
      const migrationResponse =
        await subscriptionProductsController.previewSubscriptionProductMigration(
          String(context.subscriptionResponse?.subscription?.id),
          {
            migration: {
              productId: context.productResponse02?.product.id,
            },
          }
        );

      expect(migrationResponse.statusCode).toBe(200);
      expect(migrationResponse.result.migration).toEqual({
        proratedAdjustmentInCents: BigInt(-1000),
        chargeInCents: BigInt(1000),
        paymentDueInCents: BigInt(0),
        creditAppliedInCents: BigInt(0),
      });
    });

    test('should throw an error when user sends invalid subscription id', async () => {
      const promise = subscriptionProductsController.migrateSubscriptionProduct(
        'invalid',
        {
          migration: {
            productId: context.productResponse01?.product.id,
          },
        }
      );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw an 401 error when user sends valid subscription with invalid credentials', async () => {
      const promise =
        invalidSubscriptionProductsController.migrateSubscriptionProduct(
          String(context.subscriptionResponse?.subscription?.id),
          {
            migration: {
              productId: context.productResponse02?.product.id,
            },
          }
        );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});
