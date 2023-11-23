import {
  Environment,
  OfferResponse,
  OffersController,
  ProductFamiliesController,
  ProductFamilyResponse,
  ProductsController,
  ProductResponse,
} from 'advanced-billing-sdk';
import { CONFIG, createClient } from './config';

describe('Offers Controller', () => {
  let offersController: OffersController;
  let productFamilyResponse: ProductFamilyResponse;
  let productResponse: ProductResponse;
  let invalidOffersController: OffersController;

  const productFamilyBody = {
    productFamily: {
      name: 'Offers Acme Projects',
      description: 'Amazing project management tool',
    },
  };

  const productBody = {
    product: {
      name: 'offers-premium-00020',
      handle: 'offers-premium-0020',
      description: 'premium-desc',
      priceInCents: BigInt(1000),
      interval: 1,
      intervalUnit: 'month',
    },
  };

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
    const productFamiliesController = new ProductFamiliesController(client);
    const productsController = new ProductsController(client);
    offersController = new OffersController(client);
    invalidOffersController = new OffersController(invalidClient);
    productFamilyResponse = await (
      await productFamiliesController.createProductFamily(productFamilyBody)
    ).result;
    productResponse = await (
      await productsController.createProduct(
        productFamilyResponse.productFamily?.id || 0,
        productBody
      )
    ).result;
  });

  describe('List offers', () => {
    test('should list an empty list of offers', async () => {
      const offersResponse = await offersController.listOffers({});
      expect(offersResponse.statusCode).toBe(200);
      expect(offersResponse.result.offers).toEqual([]);
    });

    test('should throw 401 error when user use invalid credentials', async () => {
      const promise = invalidOffersController.listOffers({});
      expect(promise).rejects.toThrowError();

      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should list all of the offers already created', async () => {
      const offers = [
        {
          name: 'Solo A',
          handle: 'han_shot_first_a',
          description: 'A Star Wars Story A',
          productId: productResponse.product.id || 0,
          components: [],
        },
        {
          name: 'Solo B',
          handle: 'han_shot_first_b',
          description: 'A Star Wars Story B',
          productId: productResponse.product.id || 0,
          components: [],
        },
        {
          name: 'Solo C',
          handle: 'han_shot_first_c',
          description: 'A Star Wars Story C',
          productId: productResponse.product.id || 0,
          components: [],
        },
      ];
      const promises = offers.map((offer) =>
        offersController.createOffer({ offer })
      );
      await Promise.all(promises);

      const offersResponse = await offersController.listOffers({});
      const offersNames = offersResponse.result.offers
        ?.map((offer: OfferResponse['offer']) => offer?.name)
        .sort();
      expect(offersResponse.statusCode).toBe(200);
      expect(offersResponse.result.offers?.length).toBe(3);
      expect(offersNames).toEqual(['Solo A', 'Solo B', 'Solo C']);
    });
  });

  describe('Create Offer', () => {
    test('should create an offer when user sends correct product id', async () => {
      const offerBody = {
        offer: {
          name: 'Solo',
          handle: 'han_shot_first',
          description: 'A Star Wars Story',
          productId: productResponse.product.id || 0,
          components: [],
        },
      };
      const offer = await offersController.createOffer(offerBody);
      expect(offer);

      expect(offer.result.offer).toEqual(
        expect.objectContaining({
          productFamilyId: productFamilyResponse.productFamily?.id,
          productId: productResponse.product.id || 0,
          productRevisableNumber: 0,
          name: 'Solo',
          handle: 'han_shot_first',
          description: 'A Star Wars Story',
          archivedAt: null,
          offerItems: [],
          offerDiscounts: [],
          productFamilyName: 'Offers Acme Projects',
          productName: 'offers-premium-00020',
          productPricePointName: 'Original',
          productPriceInCents: BigInt(1000),
          offerSignupPages: [],
        })
      );
    });

    test('should throw an error when the user use invalid payload information', async () => {
      const offerBody = {
        offer: {
          name: '',
          handle: '',
          description: 'A Star Wars Story',
          productId: productResponse.product.id || 0,
          components: [],
        },
      };
      const promise = offersController.createOffer(offerBody);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.result.errors).toEqual({
          name: ['Name cannot be blank.'],
          handle: ['Handle cannot be blank.'],
        });
      });
    });

    test('should throw 422 error when handle was sent with an invalid format', async () => {
      const offerBody = {
        offer: {
          name: 'Solo',
          handle: 'han_shot_first A',
          description: 'A Star Wars Story',
          productId: productResponse.product.id || 0,
          components: [],
        },
      };
      const promise = offersController.createOffer(offerBody);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.result.errors).toEqual({
          handle: [
            'Handle is invalid. Handles can only contain lowercase letters, numbers, dashes and underscores.',
          ],
        });
        expect(error.statusCode).toBe(422);
      });
    });

    test('should throw 401 error when the user use invalid credentials', async () => {
      const offerBody = {
        offer: {
          name: 'Solo',
          handle: 'han_shot_first',
          description: 'A Star Wars Story',
          productId: productResponse.product.id || 0,
          components: [],
        },
      };
      const promise = invalidOffersController.createOffer(offerBody);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('Read Offers', () => {
    let offerCreated: OfferResponse;

    beforeAll(async () => {
      const offer = {
        name: 'golden A',
        handle: 'han_shot_first_golden',
        description: 'A Star Wars Story A',
        productId: productResponse.product.id || 0,
        components: [],
      };
      offerCreated = (await offersController.createOffer({ offer })).result;
    });
    test('should read a offer with a valid offer id', async () => {
      const response = await offersController.readOffers(
        offerCreated.offer?.id || 0
      );
      expect(response.statusCode).toBe(200);
      expect(response.result.offer).toEqual(offerCreated.offer);
    });

    test('should throw 404 error sends an invalid offer id', async () => {
      const promise = offersController.readOffers(123);
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should throw 401 error when user use invalid credentials', async () => {
      const promise = invalidOffersController.readOffers(
        offerCreated.offer?.id || 0
      );
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('Archive/Unarchive Offer', () => {
    let offersResponses: OfferResponse[];
    beforeAll(async () => {
      const offers = [
        {
          name: 'Premium A',
          handle: 'han_shot_first_premium_a',
          description: 'A Star Wars Story A',
          productId: productResponse.product.id || 0,
          components: [],
        },
        {
          name: 'Premium B',
          handle: 'han_shot_first_premium_b',
          description: 'A Star Wars Story B',
          productId: productResponse.product.id || 0,
          components: [],
        },
        {
          name: 'Premium C',
          handle: 'han_shot_first_premium_c',
          description: 'A Star Wars Story C',
          productId: productResponse.product.id || 0,
          components: [],
        },
      ];
      const promises = offers.map((offer) =>
        offersController.createOffer({ offer })
      );
      const responses = await Promise.all(promises);
      offersResponses = responses.map((response) => response.result);
    });
    test('should archive the offer correctly', async () => {
      const [archivedOffer] = offersResponses;
      const archiveResponse = await offersController.archiveOffer(
        archivedOffer.offer?.id || 0
      );
      const readResponse = await offersController.readOffers(
        archivedOffer.offer?.id || 0
      );
      expect(readResponse.statusCode).toBe(200);
      expect(archiveResponse.statusCode).toBe(200);
      expect(readResponse.result.offer?.archivedAt).toBeTruthy();
    });
    test('should throw 401 error when user use invalid credentials', async () => {
      const [archivedOffer] = offersResponses;
      const promise = invalidOffersController.archiveOffer(
        archivedOffer.offer?.id || 0
      );
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
    test('should throw 404 error user sends an invalid offer id', async () => {
      const promise = offersController.archiveOffer(123);
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should unarchive a offer correctly', async () => {
      const [archivedOffer] = offersResponses;
      const archiveResponse = await offersController.unarchiveOffer(
        archivedOffer.offer?.id || 0
      );
      const readResponse = await offersController.readOffers(
        archivedOffer.offer?.id || 0
      );
      expect(readResponse.statusCode).toBe(200);
      expect(archiveResponse.statusCode).toBe(200);
      expect(readResponse.result.offer?.archivedAt).toBeNull();
    });
    test('should throw 401 error when user use invalid credentials with unarchive endpoint', async () => {
      const [archivedOffer] = offersResponses;
      const promise = invalidOffersController.unarchiveOffer(
        archivedOffer.offer?.id || 0
      );
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
    test('should throw 404 error user sends an invalid offer id to unarchive endpoint', async () => {
      const promise = offersController.unarchiveOffer(123);
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });
});
