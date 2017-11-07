/*
 *
 * LanguageProvider actions
 *
 */

import {
  DO_SOMETHING,
} from './constants';

export function doSomething(bla) {
  return {
    type: DO_SOMETHING,
    bla,
  };
}