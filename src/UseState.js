// creacion de la logica de forma imperativa, se pueden crear varios estados
import React, { useEffect, useState } from 'react'

const UseState = ({ name }) => {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('Empieza efecto');
        
        if(loading) {
            setTimeout(() => {
                console.log('Hace valiacion');
    
                setLoading(false);
    
                console.log('Termina valiacion');
            }, 1800)
        }

        console.log('Termina efecto');

    }, [loading]);

    return (
        <>
            <h2> Eliminar {name} </h2>

            <p> Escribe el código de seguridad para eliminar. </p>

            {error && (
                <>
                    <p> Error: El código es incorrecto. </p>
                </>
            )}

            {loading && (
                <>
                    <p> Cargando... </p>
                </>
            )}

            <div>
                <input placeholder='Código de seguridad'/>
                <button
                    onClick={() => setLoading(true)}
                > 
                    Comprobar
                </button>
            </div>
        </>
    );
}

export { UseState }