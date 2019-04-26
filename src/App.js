import React from 'react';
import './App.css';
import {AppProvider} from './contexto/context';
import { Lista } from './consumers/listconsumer';
import { Carro } from './consumers/carroconsumer';


export class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Lista entregada</h1>
        <AppProvider>
          <Lista />
          <h3>Mi carro:</h3>
          <Carro />
        </AppProvider>

      </div>
    );
  }
}

export default Home;
