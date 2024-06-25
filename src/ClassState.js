import React from 'react';

class ClassState extends React.Component {
    render() {
        return (
            <>
                <h2> Eliminar ClassState </h2>

                <p> Escribe el código de seguridad para eliminar. </p>

                <div>
                    <input placeholder='Código de seguridad'/>
                    <button> Comprobar </button>
                </div>
            </>
        );
    }
}

export { ClassState }