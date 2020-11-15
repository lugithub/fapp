import { left, right, fold, map, getEq } from 'fp-ts/Either';
import { identity, flow, increment } from 'fp-ts/lib/function';
import { eqNumber } from 'fp-ts/Eq';

export const e = flow(myEither, map(increment), fold(identity, identity));

export function myEither(i: number) {
  return getEq(eqNumber, eqNumber).equals(left(10), right(10))
    ? right(i)
    : left(i);
}
