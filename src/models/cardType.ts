/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardType
 */
export enum CardType {
  Bogus = 'bogus',
  Visa = 'visa',
  Master = 'master',
  Discover = 'discover',
  AmericanExpress = 'american_express',
  DinersClub = 'diners_club',
  Jcb = 'jcb',
  Switch = 'switch',
  Solo = 'solo',
  Dankort = 'dankort',
  Maestro = 'maestro',
  Laser = 'laser',
  Forbrugsforeningen = 'forbrugsforeningen',
}

/**
 * Schema for CardType
 */
export const cardTypeSchema: Schema<CardType> = stringEnum(CardType);
