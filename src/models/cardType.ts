/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardType
 */
export enum CardType {
  Visa = 'visa',
  Master = 'master',
  Elo = 'elo',
  Cabal = 'cabal',
  Alelo = 'alelo',
  Discover = 'discover',
  AmericanExpress = 'american_express',
  Naranja = 'naranja',
  DinersClub = 'diners_club',
  Jcb = 'jcb',
  Dankort = 'dankort',
  Maestro = 'maestro',
  MaestroNoLuhn = 'maestro_no_luhn',
  Forbrugsforeningen = 'forbrugsforeningen',
  Sodexo = 'sodexo',
  Alia = 'alia',
  Vr = 'vr',
  Unionpay = 'unionpay',
  Carnet = 'carnet',
  CartesBancaires = 'cartes_bancaires',
  Olimpica = 'olimpica',
  Creditel = 'creditel',
  Confiable = 'confiable',
  Synchrony = 'synchrony',
  Routex = 'routex',
  Mada = 'mada',
  BpPlus = 'bp_plus',
  Passcard = 'passcard',
  Edenred = 'edenred',
  Anda = 'anda',
  Tarjetad = 'tarjeta-d',
  Hipercard = 'hipercard',
  Bogus = 'bogus',
  Switch = 'switch',
  Solo = 'solo',
  Laser = 'laser',
}

/**
 * Schema for CardType
 */
export const cardTypeSchema: Schema<CardType> = stringEnum(CardType);
