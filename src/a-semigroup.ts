import { constant } from 'fp-ts/function';
import { ordNumber } from 'fp-ts/Ord';
import { of, getMonoid } from 'fp-ts/Array';
import {
  semigroupSum,
  getFirstSemigroup,
  Semigroup,
  getMeetSemigroup,
  getJoinSemigroup,
  getStructSemigroup,
  getFunctionSemigroup,
  semigroupAll,
  fold,
} from 'fp-ts/Semigroup';
import { compose, curryN, pathOr } from 'rambda';
import {
  getApplySemigroup as getOptionApplySemigroup,
  some,
  none,
} from 'fp-ts/Option';
import {
  getApplySemigroup as getEitherApplySemigroup,
  left,
  right,
} from 'fp-ts/Either';

function getFirstSemigroup2<A>(): Semigroup<A> {
  return {
    concat(x: A, y: A) {
      return x;
    },
  };
}

export function s() {
  // return semigroupSum.concat(1, 2);

  // function getFirstSemigroup<A = never>(): Semigroup<A>
  // A = never forces type parameter such as
  return getFirstSemigroup<number>().concat(1, 2);

  // unknown is bad
  // return getFirstSemigroup2().concat(1, 2);

  //   return getArraySemigroup<number>().concat(of(10), of(2));
  //   const semigroupMin = getMeetSemigroup(ordNumber);
  //   const semigroupMax = getJoinSemigroup(ordNumber);
  //   return semigroupMin.concat(2, 1);
  //   return semigroupMax.concat(2, 1);

  const semigroupPoint = getStructSemigroup({
    x: semigroupSum,
    y: semigroupSum,
  });
  // return semigroupPoint.concat({ x: 0, y: 0 }, { x: 1, y: 2 });

  const semigroupVector = getStructSemigroup({
    from: semigroupPoint,
    to: semigroupPoint,
  });
  //   return semigroupVector.concat(
  //     { from: { x: 0, y: 0 }, to: { x: 1, y: 2 } },
  //     { from: { x: 10, y: 20 }, to: { x: 11, y: 22 } }
  //   );

  const semigroupPredicate: Semigroup<
    (p: Point) => boolean
  > = getFunctionSemigroup(semigroupAll)<Point>();

  const isPositiveX = compose(gt(0), pathOr(-Infinity, 'x'));
  const isPositiveY = compose(gt(0), pathOr(-Infinity, 'y'));
  const isPositiveXY = semigroupPredicate.concat(isPositiveX, isPositiveY);

  isPositiveXY({ x: 1, y: 1 }); // true
  isPositiveXY({ x: 1, y: -1 }); // false
  isPositiveXY({ x: -1, y: 1 }); // false
  //   return [isPositiveXY({ x: -1, y: -1 })];

  const S = getOptionApplySemigroup(semigroupSum);

  S.concat(some(1), none); // none
  //   return S.concat(some(1), some(2)); // some(3)

  getEitherApplySemigroup(semigroupSum).concat(right(100), left('a'));
  getEitherApplySemigroup(semigroupSum).concat(right(100), right(1));

  const foo = getEitherApplySemigroup(semigroupSum);
  //   return fold(foo)(left('a'), [right(1)]);
  // return fold(foo)(right(0), [right(1), left('a'), left(1)]);

  //   return getMonoid<string>().concat(['a'], ['b']);
  return fold(getMonoid<string>())([], [['a'], ['b'], ['c']]);
}

function getArraySemigroup<A = never>(): Semigroup<Array<A>> {
  return { concat: (x, y) => x.concat(y) };
}

type Point = {
  x: number;
  y: number;
};

type Vector = {
  from: Point;
  to: Point;
};

const gt = (x: number) => (y: number) => y > x;

interface Customer {
  name: string;
  favouriteThings: Array<string>;
  registeredAt: number; // since epoch
  lastUpdatedAt: number; // since epoch
  hasMadePurchase: boolean;
}
