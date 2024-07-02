// creacion de la logica de forma imperativa, se pueden crear varios estados
import React, { useEffect, useState } from 'react'

// como la siguiente variable nunca va a cambiar, por nomeclatura la podemos llamar solo en mayusculas y espaciado con guion, por convencion
const SECURITY_CODE = 'paradigma'

const UseState = ({ name }) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log(value);

    useEffect(() => {
        console.log('Empieza efecto');
        
        if(loading) {
            
            setTimeout(() => {
                console.log('Hace valiacion');
    
                if ( value !== SECURITY_CODE ) {
                    setError(true);                    
                }

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

            {loading && (
                <>
                    <p> Cargando... </p>
                </>
            )}

            {error && (
                <>
                    <p> Error: El código es incorrecto. </p>
                </>
            )}

            <div>
                <input 
                    placeholder='Código de seguridad'
                    value={value}
                    onChange={(e) => {
                        // solucion para no recargar infinitament estado
                        if (error) {
                            setError(false)
                        }
                        // aqui se puede pero cada que escribes se actualiza el estado
                        setValue(e.target.value)
                    }}
                />
                <button
                    onClick={() => {
                        // setError(false)
                        // aqui funciona
                        setLoading(true)
                    }}
                > 
                    Comprobar
                </button>
            </div>


        </>
    );
}

export { UseState }