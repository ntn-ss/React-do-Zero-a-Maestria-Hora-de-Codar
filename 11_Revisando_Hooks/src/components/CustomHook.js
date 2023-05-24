import { useState } from 'react'
import { usePrevious } from '../hooks/usePrevious'

const CustomHook = () => {
    const [number, setNumber] = useState(0)
    const previousValue = usePrevious(number)
  return (
    <div>
        <h2>Custom Hook</h2>
        <p>O número atual é {number}.</p>
        <p>O número antigo é {previousValue}.</p>
        <button onClick={()=>setNumber(Math.round(Math.random()*100))}>Novo</button>
        <hr />
    </div>
  )
}

export default CustomHook