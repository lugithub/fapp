import { IO, map, chain } from 'fp-ts/IO';

export const i = () => map<number, boolean>(a => a > 0.5)(random)();

const random: IO<number> = () => Math.random();

const log = (s: unknown): IO<void> => () => console.log(s);

export const i2 = chain(log)(random);
export const i3 = map(log)(random);
