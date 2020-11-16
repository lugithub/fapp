import React from 'react';
import logo from './logo.svg';
import './App.css';
import { o } from './a-option';
import { e } from './a-either';
import { o2 } from './a-ord';
import { s } from './a-semigroup';
import { m } from './a-monoid';
import { f } from './a-functor';

function App() {
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
    </article>
  );
}

export default App;
