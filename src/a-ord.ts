import { ordNumber, min, contramap, getDualOrd } from 'fp-ts/Ord';
import { pathOr } from 'rambda';

// interface User {
//   name: string;
//   age: number;
// }

const byAge = contramap(pathOr(-1, 'age'))(getDualOrd(ordNumber));

export function o2() {
  //   return ordNumber.compare(1, 2);
  //return min(ordNumber)(2, 1);

  return min(byAge)(
    {
      name: 'foo1',
      age: 48,
    },
    {
      name: 'bar',
      age: 9,
    }
  );
}
