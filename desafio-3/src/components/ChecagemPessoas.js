const ChecagemPessoas = ({nome, idade, profissao}) => {
  return (
    <div>
          <h2>Nome: {nome}.</h2>
          <p>Idade: {idade}.</p>
          <p>Profissão: {profissao}.</p>
          {idade>=18 ? (<p>Pode tirar carteira de habilitação.</p>) : (<p>Menor de idade.</p>)}
    </div>
  )
}

export default ChecagemPessoas