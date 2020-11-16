import { some, map, option, Option } from 'fp-ts/Option';
import { sequenceT } from 'fp-ts/Apply';
import { pipe, flow, FunctionN, tupled } from 'fp-ts/function';

export function a() {
  // return pipe(
  //   sequenceT(option)(some(2), some(3)),
  //   map(([a, b]) => add(a)(b))
  // );

  // return flow(
  //   sequenceT(option),
  //   map(([a, b]) => add(a)(b))
  // )(some(3), some(30));

  return liftA2(add2, some(2), some(3));
}

const add = (a: number) => (b: number) => a + b;

const liftA2 = <A, B, C>(
  fabc: FunctionN<readonly [A, B], C>,
  aa: Option<A>,
  ab: Option<B>
) => pipe(sequenceT(option)(aa, ab), map(tupled(fabc)));

const add2 = (a: number, b: number) => a + b;
