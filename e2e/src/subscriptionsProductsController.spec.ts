import { SubscriptionProductsController } from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';
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
    const invalidClient = createInvalidClient();
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
          context.subscriptionResponse?.subscription?.id || 0,
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
          context.subscriptionResponse?.subscription?.id || 0,
          {
            migration: {
              productId: context.productResponse02?.product.id,
            },
          }
        );

      expect(migrationResponse.statusCode).toBe(200);
      expect(migrationResponse.result.migration.proratedAdjustmentInCents).toBe(
        BigInt(-1000)
      );
      expect(migrationResponse.result.migration.chargeInCents).toBe(
        BigInt(1000)
      );
      expect(migrationResponse.result.migration.paymentDueInCents).toBe(
        BigInt(0)
      );
      expect(migrationResponse.result.migration.creditAppliedInCents).toBe(
        BigInt(0)
      );
    });

    test('should throw an error when user sends invalid subscription id', async () => {
      const promise = subscriptionProductsController.migrateSubscriptionProduct(
        1001,
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
          context.subscriptionResponse?.subscription?.id || 0,
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
