// creacion de la logica de forma imperativa, se pueden crear varios estados
import React, { useState } from 'react';

const UseState = ({ name }) => {

    const [error, setError] = useState(false)

    return (
        <>
            <h2> Eliminar {name} </h2>

            <p> Escribe el código de seguridad para eliminar. </p>

            {error && (
                <>
                    <p> Error: El código es incorrecto. </p>
                </>
            )}

            <div>
                <input placeholder='Código de seguridad'/>
                <button
                    onClick={() => setError(!error)}
                > 
                    Comprobar
                </button>
            </div>
        </>
    );
}

export { UseState }