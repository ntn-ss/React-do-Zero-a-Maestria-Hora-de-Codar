import { useEffect, useState } from 'react'

const HookUseEffect = () => {
    
    // 1 - useEffect sem dependências: roda sempre que um componente é alterado
    useEffect(()=>{
        console.log("Tô rodando, sou o useEffect metido.");
    })

    const [number, setNumber] = useState(1)
    
    const changeSomething = () => {
        setNumber(number+1)
    }

    // 2 - Array de dependências (segundo argumento de useEffect) vazio
    useEffect(()=>{
        console.log("Só rodo quando abre");
    }, [])

    // 3 - Ter itens no array de dependências faz o useEffect rodar quando o valor de um deles for modificado
    const [anotherNumber, setAnotherNumber] = useState(0)
    useEffect(()=>{
        if (anotherNumber>1) {
            console.log("Vou rodar quando o de baixo mudar.");
        }
    }, [anotherNumber])
    

    // 4 - Cleanup no useEffect para evitar erros ou comportamentos indesejados. A propósito: sim, pode haver vários useEffect com a mesma dependência.
    useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log("Olá, mundo.");
            setAnotherNumber(anotherNumber+1)
        }, 2000)
        return () => clearTimeout(timer)
    }, [anotherNumber])

    return (
    <div>
        <h2>useEffect</h2>
        <p>Número: {number}.</p>
        <button onClick = {changeSomething}>Somar</button>
        <p>Another Number: {anotherNumber}.</p>
        <button onClick = {()=>setAnotherNumber(anotherNumber+1)}>Mudar anotherNumber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect