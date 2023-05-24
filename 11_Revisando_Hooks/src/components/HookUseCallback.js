import {useCallback, useState} from 'react'

import List from './List'

const HookUseCallback = () => {

    const [counter, setCounter] = useState(0)
    // o useCallback pega o retorno de uma função e o deixa em cache, só gerando o recarregamento do que for importante para o funcionamento do componente. Claro, só recarrega com base no que estiver no array de dependências. 
    const getItemsFromDatabase = useCallback(() => {
        return ['a','b','c']
    },[]) 
  
    return (
    <div>
        <h2>useCallback</h2>
        <List getItems={getItemsFromDatabase}></List>
        <button onClick={()=>setCounter(counter+1)}>Alterar</button>
        <p>Contador: {counter}.</p>
        <hr />
    </div>
  )
}

export default HookUseCallback