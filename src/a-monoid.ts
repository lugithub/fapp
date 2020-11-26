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
import { all, any, equals } from 'rambda';
import { map } from 'fp-ts/lib/Array';
import { flow } from 'fp-ts/lib/function';

export function m() {
  //   return fold(monoidSum)([1, 2, 3, 4]); // 10
  //   fold(monoidProduct)([1, 2, 3, 4]); // 24
  //   fold(monoidString)(['a', 'b', 'c']); // 'abc'
  //   fold(monoidAll)([true, false, true]); // false
  //   fold(monoidAny)([true, false, true]); // true

  //   return fold(getApplyMonoid(monoidSum))([some(1), none]);
  //   return fold(getApplyMonoid(monoidSum))([some(1), some(10)]);

  //   return fold(getFirstMonoid<number>())([none, none, some(1), some(2)]);
  // return fold(getLastMonoid<number>())([some(1), some(2), none, none]);

  // const list = [1, 2, 3, 4, 5];
  // const predicate = (x: number) => x * x > 8;
  // return all(predicate, list);

  type Status = 1 | 2 | 3 | 4 | 5;
  // const validList = [3, 5];
  const a = 5;

  const validFoo = (a: Status) => a === 3 || a === 5;
  const validFoo3 = (a: Status) => fold(monoidAny)([a === 3, a === 5]);
  return validFoo3;

  // const validFoo2 = flow(
  //   map((f: (b: number) => boolean) => f(a)),
  //   fold(monoidAny)
  // )([equals(3), equals(5)]);
  // return validFoo2;
}
