import { flow } from 'fp-ts/lib/function';
import {
  some,
  none,
  Option,
  getOrElse,
  map,
  getEq,
  getOrd,
} from 'fp-ts/Option';
import { constant } from 'fp-ts/function';
import { eqString } from 'fp-ts/Eq';
import { ordNumber, getDualOrd } from 'fp-ts/Ord';
import { sort } from 'fp-ts/Array';

export const o = flow(
  myOption,
  map(x => 'hi ' + x),
  getOrElse(constant('bar'))
);

export function myOption(i: number) {
  const { compare } = getOrd(getDualOrd(ordNumber));
  console.log(compare(some(1), some(2)));

  console.log(sort(getDualOrd(ordNumber))([3, 2, 1]));

  return getEq(eqString).equals(some('a'), none) ? some('foo') : none;
}
