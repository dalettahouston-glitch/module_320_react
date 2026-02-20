import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Counter from './components/Counter'
import Fruit from './components/Fruit';

function CodeAlong(props) {
  return (
    <div>Code Along 
    <p>name: {props.name}</p>
    <p>age: {props.age}</p>
    </div>
  )
}
 
function App() {
 
 
  return ( 
    <>
    <CodeAlong name="Daletta" age={25}/>
    <Counter />
    <Fruit/>
    </>
  )
}
 
export default App
