// un solo estado donde viven todos nuestros estados
import React from 'react';

class ClassState extends React.Component {

    constructor() {
        super();

        this.state = {
            error: false,
        };  
    }

    render() {
        return (
            <>
                <h2> Eliminar {this.props.name} </h2>

                <p> Escribe el código de seguridad para eliminar. </p>

                {this.state.error && (
                    <>
                        <p> Error: El código es incorrecto. </p>
                    </>
                )}

                <div>
                    <input placeholder='Código de seguridad'/>
                    <button
                        // onClick={() => this.setState({ error: !this.state.error}) }
                        onClick={() => this.setState( prevState => ({ error: !prevState.error }) )}
                    > 
                        Comprobar 
                    </button>
                </div>
            </>
        );
    }
}

export { ClassState }