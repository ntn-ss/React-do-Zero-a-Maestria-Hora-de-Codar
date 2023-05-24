import {useState, useEffect, useMemo} from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)
    // o useMemo é como um useCallback para variáveis. Guarda o valor na memória para que, por exemplo, um vetor gigantesco não precise ser rerrenderizado a cada momento.
    // Supondo "const premiumNumbers = ["0", "100", "200"]", isso explodiria meu quarto.

    const premiumNumbers = useMemo(()=>{
        return ["0", "100", "200"]
    }, [])

    useEffect(()=>{
        console.log("Premium numbers alterado");
    }, [premiumNumbers])
  
    return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e)=>setNumber(e.target.value)} />
        {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ""}
        <hr />
    </div>
  )
}

export default HookUseMemo