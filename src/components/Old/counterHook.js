import React, { useState } from 'react';
export default function CounterHook () {
    const [count, setCount] = useState(0)
  
    return (
        <div>
          <button className='inc' onClick={() => setCount(count + 1)}>Increment!</button>
          <button className='dec' onClick={() => setCount(count - 1)}>Decrement!</button>
          <button className='reset' onClick={() => setCount(0)}>Reset</button>
          <h1>Current Count: {count}</h1>
        </div>
      );
}
  