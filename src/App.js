import React from 'react';
import './App.css';
import {AppProvider} from './contexto/context';
import { Lista } from './consumers/listconsumer';

export class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Lista entregada</h1>
        <AppProvider>
          <Lista />
        </AppProvider>
      </div>
    );
  }
}

export default Home;
