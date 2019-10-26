import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ScrollLock from './scroll-lock';
import Keybind from './keybind-btn';

const App = () => {
  return (
    <div>
      <h1>Scroll Lock</h1>
      <ScrollLock />
      <h1>Keybinds</h1>
      <Keybind />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
