import { useState } from "react";

const ManageData = () => {
    let myData = 10;

    const [number, setNumber] = useState(10);

  return (
    <div>
        <span>Sem estado.</span>
        <p>Valor: {myData}.</p>
        <button onClick={()=> (myData=15)}>Mudar variável</button>
        
        <p>Com estado.</p>
        <p>Valor: {number}.</p>
        <button onClick={()=> setNumber((prev)=>prev+1)}>Mudar o estado</button>
    </div>
  )
}

export default ManageData