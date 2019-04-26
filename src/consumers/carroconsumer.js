import React from 'react';
import {Contexto} from '../contexto/context';

export class Carro extends React.Component {
    render() {
        return(
            <Contexto.Consumer>
                {c => {
                    return c.carro.map((itemes, i) => {
                           return(
                            <div key={i}>
                              <li>{itemes}</li>
                            </div>
                           );           
                    })
                    
                }}
            </Contexto.Consumer>
        );
    }
}