// un solo estado donde viven todos nuestros estados
import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component {

    constructor() {
        super();

        this.state = {
            value: '',
            error: false,
            loading: false,
        };  
    }

    // UNSAFE_componentWillMount () {
    //     console.log('componentWillMount');
    // }

    // UNSAFE_comp... para quitar el log de error, simula una validacion con el backend o el metodo de []

    // componentDidMount () {
    //     console.log('componentDidMount');
    // }

    // ese ultimo metodo no se ejecuta

    componentDidUpdate() {
        console.log('componentDidUpdate');

        if(this.state.loading) {
            setTimeout(() => {
                console.log('Hace valiacion');
    
                if (SECURITY_CODE === this.state.value ) {
                    this.setState({ loading: !this.state.loading });
                } else {
                    this.setState({ error: true, loading: false})
                }
                
                console.log('Termina valiacion');
            }, 1800)
        };
    }

    render() {

        // const { error, loading, value} = this.state

        return (
            <>
                <h2> Eliminar {this.props.name} </h2>

                <p> Escribe el código de seguridad para eliminar. </p>

                <div>
                    <input 
                        placeholder='Código de seguridad'
                        value={this.state.value}
                        onChange={(e) => {
                            this.setState({ value: e.target.value })
                        }}
                    />
                    <button
                        // onClick={() => this.setState({ error: !this.state.error}) }
                        // onClick={() => this.setState( prevState => ({ error: !prevState.error }) )}
                        onClick={() => this.setState({ error: false, loading: !this.state.loading})}
                    > 
                        Comprobar 
                    </button>
                
                    {this.state.error && (
                        <>
                            <p> Error: El código es incorrecto. </p>
                        </>
                    )}

                    {this.state.loading && (
                        <>
                            <Loading />
                        </>
                    )}
                </div>
            </>
        );
    }
}

export { ClassState }