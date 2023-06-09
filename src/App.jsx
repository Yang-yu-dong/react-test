import * as React from 'react'
const useState = React.useState

const App =  () => {
  const [num, setNum] = useState(0)
  return (
    <React.Fragment>
      <div>hello world {num}</div>
      <button onClick={() => setNum(num + 1)}>add</button>
    </React.Fragment>
  )
}

export default App