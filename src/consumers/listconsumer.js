import React from 'react';
import {Contexto} from '../contexto/context';

export class Lista extends React.Component {
    render() {
        return(
            <Contexto.Consumer>
                {c => {
                    return c.listado.map((lista, i) => {
                        return (
                            <div key={i}>
                                <p onClick={e => c.addItem(i)}>{lista.name}</p>
                            </div>
                        );
                    })
                }}
            </Contexto.Consumer>
        );
    }
}