import { useState } from "react"

const HookUseState = () => {
    // 1 - useState: gravar e alterar um valor e rerrenderizá-lo para que seja exibido
    let userName = "Jão"
    // Paralelo com POO: a primeira parte funciona como um get e um set. A segunda funciona como um instanciamento de classe.
    const [name, setName] = useState("Nathan")
    const [age, setAge] = useState(21)
    const changeNames = () => {
        console.log(userName, name);
        userName="Jão Silva"
        setName("Nathan Santos")
        console.log(userName, name);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // envio a uma API
        console.log(age);
    }

    return (
        <div>
            <h2>useState</h2>
            <p>Variável: {userName}.</p>
            <p>useState: {name}.</p>
            <button onClick={changeNames}>Mudar nomes</button>
            {/* 2 - useState e input */}
            <form onSubmit={handleSubmit}>
                <p>
                    Digite a sua idade:
                </p>
                <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            Você tem {age} anos.
            <hr />
        </div>
    )
}

export default HookUseState