import * as React from 'react';
import { useScrollLock } from '../src/';

export default function Example() {
  const [someBool, setSomeBool] = React.useState(false);

  const lockRef = useScrollLock<HTMLDivElement>(someBool, '400px');

  return (
    <div ref={lockRef}>
      <button onClick={() => setSomeBool(b => !b)}>Click Me</button>
      {someBool ? (
        <div
          style={{
            height: '300px',
            width: '300px',
            backgroundColor: 'lightgreen',
          }}
        >
          Inner content
        </div>
      ) : null}
      <div
        style={{
          height: '2200px',
          width: '300px',
          backgroundColor: 'lightblue',
        }}
      >
        {' '}
        MORE CONTENT
      </div>
    </div>
  );
}
