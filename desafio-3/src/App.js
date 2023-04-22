import './App.css';
import ManageData from './components/ManageData';
import City from "./assets/mo8hvmu3a0c01.jpg";
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import ChecagemPessoas from './components/ChecagemPessoas';

import { useState } from 'react';

function App() {
  const [userName] = useState("Nathan");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km:0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km:300},
    {id: 3, brand: "Tesla", color: "Preto", newCar: true, km:0},
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const pessoas = [
    {id: 1, nome: "Zeca", idade: 6, profissao: "Criança"},
    {id: 2, nome: "Vandercleidson", idade: 21, profissao: "Estudante"},
    {id: 3, nome: "Wyftherley", idade: 88, profissao: "Aposentado"}
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      
      {/* Imagem em Public */}
      <div>
        <img src="./mo8hvmu3a0c01.jpg" alt="Cidade Cyberpunk" style={{width: 500}} />
      </div>
      {/* Imagem em Assets */}
      <div>
        <img src={City} alt="Cidade Cyberpunk" style={{width: 500}} />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* Com Props */}
      <ShowUsername name={userName}/>
      
      {/* Desconstrução de Props */}
      <CarDetails brand="Fusca" km={50} color="Azul" newCar={false}/>
      
      {/* Reaproveitamento de componente */}
      <CarDetails brand="Volkswagen" km={0} color="Roxo" newCar={true}/>
      <CarDetails brand="Fiat" km={500} color="Verde" newCar={false}/>
      <CarDetails brand="Volvo" km={1000} color="Cinza" newCar={false}/>
    
    {/* Loop em array de objetos */}
    {cars.map((car)=> (
      <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
    ))}

      <Fragment propFragment="teste"/>

      {/* Children */}
      <Container myValue="Teste">
        <p>E este é o conteúdo.</p>
      </Container>

      <Container myValue="Teste 2">
        <p>Testando o contêiner.</p>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage}/>

      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>

      <p>---------- TAREFA DO MÓDULO ----------</p>
      {pessoas.map((pessoa)=> (
        <ChecagemPessoas key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}/>
      ))}

    </div>
  );
}

export default App;