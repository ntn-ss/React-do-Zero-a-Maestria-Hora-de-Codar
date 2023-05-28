import { useContext } from "react"

import { AppContext } from "../App"

const Context = () => {

    const details = useContext(AppContext)

    return <>
        {details ?
            <>
                <h2>Linguagem: {details.language}.</h2>
                <h4>Framework: {details.framework}.</h4>
                <p>Quantidade: {details.projects}</p>
            </>:
                <p>Contexto não encontrado.</p>
        }
    </>
}

export default Context