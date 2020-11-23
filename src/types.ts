export interface IError {
  code: number;
  message: string;
}

export function isError<A>(a: A | IError | undefined): a is IError {
  return a !== undefined && (a as IError).code !== undefined;
}

export interface IUser {
  id: number;
  email: string;
}

export const DefaultUser: IUser = {
  id: -1,
  email: '',
};

export function isUser(a: IUser | IError | undefined): a is IUser {
  return a !== undefined && (a as IUser).id !== undefined;
}
