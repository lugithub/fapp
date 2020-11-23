import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { o } from './a-option';
import { e } from './a-either';
import { o2 } from './a-ord';
import { s } from './a-semigroup';
import { m } from './a-monoid';
import { f } from './a-functor';
import { a } from './a-applicative';
import { i, i2, i3 } from './a-io';
import { fuser, t } from './a-task';
import { IError, isError, isUser, IUser } from './types';
import { te } from './a-taskeither';

function App() {
  const [t1, sett1] = useState<IUser | undefined>();
  // t().then(sett1);

  useEffect(() => {
    fuser().then(sett1);
  }, []);

  // const [t2, sett2] = useState<IUser | undefined>();
  const [t2, sett2] = useState<IUser | undefined | IError>();

  useEffect(() => {
    // te(1).then(sett2);
    te(1).then(sett2);
  }, []);

  return (
    <article className="App">
      <article>
        <h1>Option</h1>
        <pre>{JSON.stringify(o(0), null, 2)}</pre>
        <pre>{JSON.stringify(o(1), null, 2)}</pre>
      </article>
      <article>
        <h1>Either</h1>
        <pre>{JSON.stringify(e(0), null, 2)}</pre>
        <pre>{JSON.stringify(e(1), null, 2)}</pre>
      </article>
      <article>
        <h1>Ord</h1>
        <pre>{JSON.stringify(o2(), null, 2)}</pre>
      </article>
      <article>
        <h1>Semigroup</h1>
        <pre>{JSON.stringify(s(), null, 2)}</pre>
      </article>
      <article>
        <h1>Monoid</h1>
        <pre>{JSON.stringify(m(), null, 2)}</pre>
      </article>
      <article>
        <h1>Functor</h1>
        <pre>{JSON.stringify(f(), null, 2)}</pre>
      </article>
      <article>
        <h1>Applicative</h1>
        <pre>{JSON.stringify(a(), null, 2)}</pre>
      </article>
      <article>
        <h1>IO</h1>
        <pre>{JSON.stringify(i(), null, 2)}</pre>
        <pre>{JSON.stringify(i2(), null, 2)}</pre>{' '}
        <pre>{JSON.stringify(i3()(), null, 2)}</pre>
      </article>
      <article>
        <h1>Task</h1>
        <pre>{JSON.stringify(t1, null, 2)}</pre>
      </article>
      <article>
        <h1>TaskEither</h1>
        {t2 !== undefined && (
          <>
            {isError(t2) && <pre>error: {JSON.stringify(t2, null, 2)}</pre>}
            {isUser(t2) && <pre>{JSON.stringify(t2, null, 2)}</pre>}
          </>
        )}
      </article>
    </article>
  );
}

export default App;
