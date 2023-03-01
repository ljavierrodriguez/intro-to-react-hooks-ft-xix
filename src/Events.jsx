import React, { useState } from 'react'

const Events = () => {

    const [show, setShow] = useState(false);


    function cambiarShow(arg) {
        console.log(arg);
        setShow(!show);
    }

    return (
        <div>

            <p>
                {show ? "Verdadero" : "Falso"}
            </p>

            <button onClick={(evento) => {
                setShow(!show);
            }}>1er Modo</button>


            <button onClick={cambiarShow}>2do Modo</button>
            <button onClick={(evento) => cambiarShow("Hola")}>3er Modo</button>


            <div className="box"
                onMouseOver={(evento) => {
                    console.log(evento);
                }}

                onMouseOut={(evento) => {
                    console.log(evento);
                }}

                onClick={(evento) => {
                    console.log(evento);
                }}


            ></div>

            <a href="https://google.cl" target={"_blank"} onClick={(e) => {
                e.preventDefault();
                console.log("Abriendo google")
            }}>Google</a>

            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <button>enviar</button>
            </form>


        </div>

    )
}

export default Events


