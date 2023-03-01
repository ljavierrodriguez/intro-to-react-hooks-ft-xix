import { Component, useEffect } from 'react';

const Heading = (props) => {

    /* 
    
    useEffect(function, array);

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third]) 
    */
    
    useEffect(() => {
        // componentDidMount
        console.log("Cargando Heading...");

        return () => {
            // componentWillUnmount
            console.log("Eliminando Heading...");
        }

    }, [])

    useEffect(() => {
        // componentDidUpdate
        console.log("Updating Heading...");

    }, [props])

    return (
        <h1>{props.texto}</h1>
    )
}

/* class Heading extends Component {

    componentDidMount(){
        console.log("Cargando Heading...")
    }

    componentWillUnmount(){
        console.log("Eliminando Heading...");
    }

    render(){
        return (
            <h1>{this.props.texto}</h1>
        )
    }
} */

export default class ClassComponent extends Component {

    state = {
        title: "Componente de Clase",
        users: [
            {id: 1, name: 'John Doe'}
        ],
        show: true
    }

    cambiarEstado = () => {
        this.setState({
            title: 'Cambiando el Estado'
        })
    }

    ocultarHeading = () => {
        this.setState({
            show: !this.state.show
        })
    }

    componentDidUpdate(){
        console.log("Ha ocurrido un cambio");
    }

    render(){
        return (
            <>
                <button onClick={this.cambiarEstado}>Cambiar Estado</button>
                <button onClick={this.ocultarHeading}>{ this.state.show ? "Ocultar": "Mostrar"} Heading</button>
                {
                    this.state.show ? (
                        <Heading texto={this.state.title} />
                    ):(
                        <h1>Ocultando el Heading</h1>
                    )
                }
            </>
        )
    }
}

