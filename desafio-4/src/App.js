import './App.css';
import MyComponent from './components/MyComponent';

import {useState} from 'react';
import Title from './components/Title';
import Carros from './components/Carros';

function App() {
  const n = 15
  const [name] = useState("Nathan")
  const redTitle = true
  const cars = [
    {
      id: 1,
      marca: "Sedan",
      quilometragem: 0,
      cor: "Azul",
    },
    {
      id: 2,
      marca: "Ferrari",
      quilometragem: 0,
      cor: "Vermelha",
    },
    {
      id: 3,
      marca: "Chevette",
      quilometragem: 1000,
      cor: "Roxo",
    }
]
  return(
    <div>
      {/* CSS Global */}
      <h1>CSS no React</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Parágrafo do APP JS</p>
      {/* CSS Inline, evitar */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Parágrafo com CSS Inline</p>
      {/* CSS Inline dinâmico */}
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={name==="Nathan" ? ({color: "lightgreen", backgroundColor: "darkred"}) : ({color: "brown"})}>Teste nome: {name}</h2>

      {/* Classes dinâmicas */}
      <h2 className={redTitle ? "red-title":"title"}>Este título terá classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />

      {/* Atividade do Módulo */}
      <h1 className='minhaAtividade'>Atividade do Módulo</h1>
      {cars.map((car)=>(
        <Carros key={car.id} marca={car.marca} quilometragem={car.quilometragem} cor={car.cor} />
      ))}

    </div>
  )
}

export default App;