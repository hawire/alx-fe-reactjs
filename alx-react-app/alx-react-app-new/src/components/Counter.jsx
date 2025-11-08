import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize count state

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '1.5em' }}>Current Count: {count}</p>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{ margin: '5px', padding: '10px 20px' }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ margin: '5px', padding: '10px 20px' }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ margin: '5px', padding: '10px 20px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
