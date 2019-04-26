import React from 'react';

export const Contexto = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listado: [],
            carro: [],
            addItem: this.addItem
        }
    }

    componentDidMount() {
        this.getUsers();
    }
    
    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            console.log(resp.status);
            return resp.json();
        })
        .then(data => {
            console.log('recibe: ', data);
            this.setState({
                listado: data
            })
        })
    }

    addItem = (i) => {
        console.log('click ', i);
    }




    render() {
        return(
            <Contexto.Provider value={this.state}>
              {this.props.children}
            </Contexto.Provider>
        );
    }
}