import { useState } from 'react'
import './App.css'
import Header from '../src/components/header'
import Mainwrapper from './components/main-body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>hello world</h1>  
    <Header />
    <Mainwrapper />
    </div>
  )
}

export default App;
