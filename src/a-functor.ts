import { flow } from 'fp-ts/function';
import { map, some, none, Option } from 'fp-ts/Option';
import { length, add, prop, path } from 'rambda';

export function f() {
  // return map<number, number>(x => x + 1)(some(1));
  // return map<number, number>(x => x + 1)(none);

  // map(x=>x+1) . g
  // where x => x + 1, a pure function
  //       g,          an effectual function
  return flow(g, map<number, number>(add(10)))(some('hi'));
}

function g(a: Option<string>) {
  return map<string, number>(prop('length'))(a);
}
