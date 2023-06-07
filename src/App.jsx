import React, { useState } from 'react';

export default () => {
  const [num, setNum] = useState(0)
  return (
    <React.Fragment>
      <div>hello world {num}</div>
      <button onClick={() => setNum(num + 1)}>add</button>
    </React.Fragment>
  )
}