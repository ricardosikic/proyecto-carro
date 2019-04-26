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
    

    // filtro aca, consumidor solo muestra
    addItem = (i) => {
        if(i >= 0) {
        const newItem = this.state.listado[i].name;
        console.log('valor', newItem);
            this.setState({
                carro: this.state.carro.concat(newItem)
            })
        }
 
        // console.log(newItem);
        // console.log(newItem);
        // const personName = newItem.name
        // console.log('name:', personName);
    }



    render() {
        return(
            <Contexto.Provider value={this.state}>
              {this.props.children}
            </Contexto.Provider>
        );
    }
}