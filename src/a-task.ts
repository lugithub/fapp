import { delay, of, map } from 'fp-ts/Task';
import axios from 'axios';
import { flow } from 'fp-ts/lib/function';
import { path } from 'rambda';
import { IUser } from './types';

export const t = async () => fa();

const fa = map(x => `hi ${x}`)(of('a'));

export const fuser = map<any, IUser | undefined>(
  flow(path(['data', 'data']))
)(() => axios.get('https://reqres.in/api/users/11'));
