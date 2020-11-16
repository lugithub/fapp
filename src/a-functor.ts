import { map, some, none } from 'fp-ts/Option';

export function f() {
  //   return map<number, number>(x => x + 1)(some(1));
  return map<number, number>(x => x + 1)(none);
}
