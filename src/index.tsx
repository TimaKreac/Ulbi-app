import React from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';

render(
  <div>
    <div>
      <h1>React TypeScript Webpack Starter Template</h1>
      <p>
        This is a template for a React TypeScript project. It includes Webpack,
        ESLint, Prettier, and Husky.
      </p>
    </div>
    <Counter />
  </div>,
  document.getElementById('root'),
);
