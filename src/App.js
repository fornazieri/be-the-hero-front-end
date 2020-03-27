//import React, { useState } from 'react';
import React from 'react';

import './global.css';

import Routes from './routes'

//import Header from './Header'

// JSX (Javascript XML) é quando o html está dentro do javascript, ou seja, aquivo .js

//dentro de function App
//const [counter, setCounter] = useState(0); //retorna array de 2 posições
  //[valor, funcaoDeAtualizacao] funcao que consegue alterar o valor 
  // function increment() {
  //   setCounter(counter + 1);
  // };

  // return (
  //   //<Header title="Semana OmniStack" /> //ou <Header></Header>
  //   <div>
  //     <Header>Contador: {counter}</Header>
  //     <button onClick={increment}>Incrementar</button>
  //   </div>
  // );

function App() {
  return(
    <Routes />
  );
}

export default App;
