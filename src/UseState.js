// creacion de la logica de forma imperativa, se pueden crear varios estados
import React, { useEffect, useState } from 'react'

// como la siguiente variable nunca va a cambiar, por nomeclatura la podemos llamar solo en mayusculas y espaciado con guion, por convencion
const SECURITY_CODE = 'paradigma'

const UseState = ({ name }) => {

    const [state, setState] = useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    })

    // const [value, setValue] = useState('');
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    console.log(state);

    useEffect(() => {
        console.log('Empieza efecto');
        
        if(state.loading) {
            
            setTimeout(() => {
                console.log('Hace valiacion');
    
                if ( state.value !== SECURITY_CODE ) {
                    setState({
                        ...state,
                        loading: false,
                        error: true,
                    })
                    
                    console.log(`${state.value !== SECURITY_CODE}`)
                } else {
                    setState({
                        ...state,
                        loading: false,
                        error: false,
                        confirmed: true,
                    })
                }
    
                console.log('Termina valiacion');
            }, 1800)
        }

        console.log(`Termina efecto`);

    }, [state.loading]);

    if(!state.deleted && !state.confirmed) {
        return (
            <>
                <h2> Eliminar {name} </h2>
    
                <p> Escribe el código de seguridad para eliminar. </p>
    
                {state.loading && (
                    <>
                        <p> Cargando... </p>
                    </>
                )}
    
                {state.error && (
                    <>
                        <p> Error: El código es incorrecto. </p>
                    </>
                )}
    
                <div>
                    <input 
                        placeholder='Código de seguridad'
                        value={state.value}
                        onChange={(e) => {
                            // solucion para no recargar infinitament estado
                            if (state.error) {
                                setState({
                                    ...state,
                                    error: false,
                                    value: e.target.value,
                                })
                            } else {
                                // aqui se puede pero cada que escribes se actualiza el estado
                                setState({
                                    ...state,
                                    value: e.target.value,
                                })
                            }
    
                        }}
                    />
                    <button
                        onClick={() => {
                            // setError(false)
                            // aqui funciona
                            setState({
                                ...state,
                                loading: true,
                            })
                        }}
                    > 
                        Comprobar
                    </button>
                </div>
    
    
            </>
        );
    } else if (!state.deleted && state.confirmed) {
        return (
            <>
                <h2> Eliminar {name} </h2>
                <p> ¿Segurx de que quieres eliminar? </p>
                <div>
                    <button
                        onClick={ () => {
                                setState({
                                    ...state,
                                    deleted: true,
                                })
                            } 
                        }
                    > 
                        Sí, eliminar.
                    </button>
                    <button
                        onClick={ () => {
                            setState({
                                ...state,
                                confirmed: false,
                                value: '',
                            })
                        } 
                    }
                    > 
                        No, por favor.
                    </button>
                </div>
            </>
        );
    } else {
        return(
            <>
                <p> Eliminado con éxito. </p>

                    <button
                        onClick={ () => {
                            setState({
                                ...state,
                                confirmed: false,
                                deleted: false,
                                value: '',
                            })
                        } 
                    }
                    > 
                        ¿Sabes? Me arrepentí.
                    </button>
            </>
        )
    }
}

export { UseState }