import React, { useEffect, useState } from 'react'

const Heading = (props) => {
    return (
        <h1>{props.texto}</h1>
    )
}

const FunctionComponent = () => {
    /* 
    first = nombre para acceder al valor del estado
    setFirst = nombre de la funcion que me permite cambiar el valor del estado
    second = es el valor inicial del estado    
    */
    // const [first, setfirst] = useState(second);
    const [name, setName] = useState("John Doe"); // string
    const [active, setActive] = useState(false);

    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe'}
    ])

    const cambiarEstado = () => {
        setName("Jane Doe");
    }

    useEffect(() => {
        // componentDidUpdate
        console.log("Ha ocurrido un cambio en name");
        console.log(name)

    }, [name])

    return (
        <>
        <button onClick={cambiarEstado}>Cambiar Estado</button>
        <div>FunctionComponent</div>
        <Heading texto={name} />
        </>
    )
}

export default FunctionComponent