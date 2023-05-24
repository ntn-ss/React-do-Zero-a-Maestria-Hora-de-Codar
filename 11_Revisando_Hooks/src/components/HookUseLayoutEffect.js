import { useLayoutEffect, useEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome.")
  
  // O valor atribuído pelo useLayoutEffect nem se vê nesta situação.
  useEffect(()=>{
    console.log("2");
    setName("Mudou de novo.");
  }, [])

  // Fazer algo antes do carregamento, vem sempre primeiro. Se fossem dois useEffect, aí sim o de cima viria antes.
  useLayoutEffect(()=>{
    console.log("1");
    setName("Outro nome")
  }, [])

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  )
}

export default HookUseLayoutEffect