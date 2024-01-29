import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <div>
        <h1>React TypeScript Webpack Starter Template</h1>
        <p>
          This is a template for a React TypeScript project. It includes
          Webpack, ESLint, Prettier, and Husky.
        </p>
      </div>
      <Counter />
    </div>
  );
}

export default App;
