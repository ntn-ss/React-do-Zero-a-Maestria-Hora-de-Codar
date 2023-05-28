import React, { createContext } from 'react';

// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

// 5 - Desestruturação de props
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

// 9 - useContext
import Context from './components/Context';

// 8 - Type
type textOrNull = string | null
type fixed = "Isso" | "Ou" | "Aquilo"


// 9 - Context
interface IAppContext {
  language: string,
  framework: string,
  projects: number,
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - Variáveis
  const name: string = 'Nathan'
  const age: number = 21
  const isStudying: boolean = true

  // 2 - Funções
  const userGreeting = (name: string):string => {
    return `Olá, ${name}.`
  }

  // 8 - Type
  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null //Null é lido como false dentro de ifs
  // mySecondText = "Agora tem texto"
  
  // const testandoFixed: fixed = "Aquele" //Erro
  const testandoFixed: fixed = "Isso"

  // 9 - Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "React",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com TypeScript</h1>
        <h2>Meu nome é {name}.</h2>
        <p>Tenho {age} anos.</p>
        {isStudying ? <p>Estou estudando.</p> : <p>Não estou estudando.</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        {/* 5 - Uso de props */}
        <SecondComponent name="Osvaldo" />

        <Destructuring title = "Primeira publicação" content = "Algum conteúdo" commentsQty = {10} tags={["TS", "JS"]} category={Category.TS}/>
        
        <Destructuring title = "Uma publicação estremecedora" content = "Vencerei esta guerra" commentsQty = {666} tags={["Superação", "Destreza"]} category={Category.P}/>
        <State />
        
        { myText ?
          <p>Tem texto na variável.</p> :
          <p>Não tem texto na variável.</p> 
        }

        { mySecondText ?
          <p>Tem texto na variável.</p> :
          <p><b>Não</b> tem texto na variável.</p> 
        }
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;