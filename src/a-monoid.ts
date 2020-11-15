import {
  getApplyMonoid,
  getFirstMonoid,
  getLastMonoid,
  none,
  some,
} from 'fp-ts/Option';
import {
  fold,
  monoidAll,
  monoidAny,
  monoidProduct,
  monoidString,
  monoidSum,
} from 'fp-ts/Monoid';

export function m() {
  //   return fold(monoidSum)([1, 2, 3, 4]); // 10
  //   fold(monoidProduct)([1, 2, 3, 4]); // 24
  //   fold(monoidString)(['a', 'b', 'c']); // 'abc'
  //   fold(monoidAll)([true, false, true]); // false
  //   fold(monoidAny)([true, false, true]); // true

  //   return fold(getApplyMonoid(monoidSum))([some(1), none]);
  //   return fold(getApplyMonoid(monoidSum))([some(1), some(10)]);

  //   return fold(getFirstMonoid<number>())([none, none, some(1), some(2)]);
  return fold(getLastMonoid<number>())([some(1), some(2), none, none]);
}
