import { flow } from 'fp-ts/function';
import { left, orElse, tryCatch, map, fold } from 'fp-ts/TaskEither';
import axios, { AxiosResponse } from 'axios';
import { path, pathOr } from 'rambda';
import { IError, IUser } from './types';

const apiUser = (id: number) => {
  return axios.get(`https://reqres.in/api/users/a${id}`);
  //   return axios.get(`https://reqres.in/api/users/${id}`);
};

const tryGetUser = (id: number) =>
  tryCatch(apiUser.bind(null, id), e => {
    console.log('raw error', JSON.stringify(e));
    return {
      code: pathOr(-1, ['response', 'status'])(e),
      message: pathOr('unknown error', ['message'])(e),
    };
  });

const getUser = flow(
  tryGetUser,
  map<
    AxiosResponse<{ data: IUser; ad: { company: string } }>,
    IUser | undefined
  >(path(['data', 'data']))
);

// orElse<E,A,M>
// orElse: <E, A, M>(onLeft: (e: E) => TaskEither<M, A>) => (ma: TaskEither<E, A>) => TaskEither<M, A>
const errorHandler = orElse<IError, IUser | undefined, IError>(
  (error: IError) => left(error)
);

export async function te(id: number) {
  return await flow(
    getUser,
    errorHandler,

    //   const fold: <E, A, B>(
    //   onLeft: (e: E) => Task<B>,
    //   onRight: (a: A) => Task<B>
    // ) => (ma: TaskEither<E, A>) => Task<B>
    fold<IError, IUser | undefined, IUser | undefined | IError>(
      error => () => Promise.resolve(error),
      a => () => Promise.resolve(a)
    )
  )(id)();
}
