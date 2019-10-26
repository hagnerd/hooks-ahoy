import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ScrollLock from './scroll-lock';

const App = () => {
  return (
    <div>
      <ScrollLock />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
