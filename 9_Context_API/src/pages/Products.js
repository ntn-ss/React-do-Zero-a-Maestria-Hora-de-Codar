// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// 4 - Refatorando com hooks
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Products = () => {
  const {counter} = useCounterContext()
  
  // 5 - Contexto mais complexo
  const {color, dispatch} = useTitleColorContext()
  return (
    <div>
      <h1 style={{color: color}}>Products</h1>
      <p>Valor do contador: {counter}.</p>
    </div>
  )
}

export default Products