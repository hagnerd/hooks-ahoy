import * as React from 'react';

import { useKeybind } from '../src';

function Thing({ setCounter }) {
  useKeybind({
    escape: () => {
      setCounter(c => c + 1);
    },
  });

  return <div>👻</div>;
}

export default function Keybindbtn() {
  const [counter, setCounter] = React.useState(0);
  const [spook, setSpook] = React.useState(false);

  return (
    <div>
      <button onClick={() => setCounter(c => c + 1)}>Try Me</button>
      <h1>{counter}</h1>
      <button onClick={() => setSpook(c => !c)}>Spooky</button>
      {spook && <Thing setCounter={setCounter} />}
    </div>
  );
}
