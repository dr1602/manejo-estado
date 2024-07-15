// creacion de la logica de forma imperativa, se pueden crear varios estados
import React, { useEffect, useReducer, useState } from 'react'

// como la siguiente variable nunca va a cambiar, por nomeclatura la podemos llamar solo en mayusculas y espaciado con guion, por convencion
const SECURITY_CODE = 'paradigma'

const UseReducer = ({ name }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state);

    const onError = () => dispatch({ type: actionTypes.error })
    const onConfirm = () => dispatch({ type: actionTypes.confirm })
    const onCheck = () => dispatch({ type: actionTypes.check })
    const onDelete = () => dispatch({ type: actionTypes.deleted })
    const onReset = () => dispatch({ type: actionTypes.reset })

    const onWrite = ({ target: { value } }) => {
        // solucion para no recargar infinitament estado
        dispatch({ type: actionTypes.write, payload: value })
    }

    useEffect(() => {
        console.log('Empieza efecto');
        
        if(state.loading) {
            
            setTimeout(() => {
                console.log('Hace valiacion');
    
                if ( state.value !== SECURITY_CODE ) {
                    onError();
                    // dispatch({ type: actionTypes.error })
                    
                    console.log(`${state.value !== SECURITY_CODE}`)
                } else {
                    onConfirm();
                    // dispatch({ type: actionTypes.confirm })
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
                        onChange={
                            // dispatch({ type: actionTypes.write, payload: e.target.value })
                            onWrite
                        }
                    />
                    <button
                        onClick={
                            // dispatch({ type: actionTypes.check })
                            onCheck
                        }
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
                        onClick={
                            // dispatch({ type: actionTypes.deleted })
                            onDelete
                        }
                    > 
                        Sí, eliminar.
                    </button>
                    <button
                        onClick={
                            // dispatch({ type: actionTypes.reset })
                            onReset
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
                        onClick={
                            // dispatch({ type: actionTypes.reset })
                            onReset
                        }
                    > 
                        ¿Sabes? Me arrepentí.
                    </button>
            </>
        )
    }
}

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const actionTypes = {
    error: 'ERROR',
    confirm: 'CONFIRM',
    write: 'WRITE',
    check: 'CHECK',
    deleted: 'DELETE',
    reset: 'RESET',
}

// reducer objects, otra posibilidad para trabajar con reducers

const reducerSwitch = (state, action) => {
    switch (action.type) {
        case actionTypes.error:
            return { ...state, loading: false, error: true };
        case actionTypes.confirm:
            return { ...state, loading: false, error: false, confirmed: true };
        case actionTypes.write:
            if (state.error) {
                return { ...state, error: false, value: action.payload }
            } else {
                // aqui se puede pero cada que escribes se actualiza el estado
                return { ...state, value: action.payload }
            };
        case actionTypes.check:
            return { ...state, loading: true };
        case actionTypes.deleted:
            return { ...state, deleted: true };
        case 'RESET':
            return { ...state, confirmed: false, deleted: false, value: '' };
        default:
            return state;
    }
}

const reducer = ( state, action ) => {
    return reducerSwitch(state, action)
}

export { UseReducer }