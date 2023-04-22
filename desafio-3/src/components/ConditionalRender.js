import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)
    
    const [name, setName] = useState("Matheus");
  return (
    <div>
        <h1>Isto será exibido?</h1>
        {x && <p>Se "X" for "true", sim!</p>}
        {!x && <p>Se "X" for "false", não.</p>}
        
        <h1>If ternário</h1>
        {name==="João" ? (
            <div>O nome é João.</div>
        ) : (
            <div>Nome não encontrado.</div>
        )}
        <button onClick={()=>setName((prev)=>prev="João")}>Clique aqui!</button>
    </div>
  )
}

export default ConditionalRender