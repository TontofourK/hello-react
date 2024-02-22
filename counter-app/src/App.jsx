import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setcounter] = useState(15);

  const add = () => {
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    console.log({counter});
  }

  const remove = () => {
    setcounter(counter - 1);
    console.log({counter});
  }
  return (
    <>
    <h1>counter app {counter}</h1>
    <p>counter value: {counter}</p>
    <button onClick={add}>add</button>{" "}
    <button onClick={remove}>remove</button>
    <footer>counter: {counter}</footer>
    </>
  )
}

export default App
