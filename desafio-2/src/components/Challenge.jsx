const Challenge = ({ x , y } ) => {
    x = Number(x); y = Number(y)
    const eventoSoma = (e) => console.log(x+y)
    const eventoSubtrai = (e) => console.log(x-y)
    const eventoDivide = (e) => console.log(x/y)
    return (
        <div>
            <h1>Calculadeiro</h1>
            <h2>Você enviou os valores {x} e {y}.</h2>
            <button onClick={eventoSoma}>Clique aqui para somá-los.</button><br />
            <button onClick={eventoSubtrai}>Clique aqui para subtraí-los.</button><br />
            <button onClick={eventoDivide}>Clique aqui para dividi-los.</button><br />
            
            {/* Decidi fazer em função de flecha anônima para teste. */}
            <button onClick={() => console.log(x*y)}>Clique aqui para multiplicá-los.</button><br />
        </div>
    )
}

export default Challenge