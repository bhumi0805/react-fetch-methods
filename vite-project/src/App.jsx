import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Providercontext from './Components/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Providercontext>
          <Home> </Home>
       </Providercontext>
    </>
  )
}

export default App
