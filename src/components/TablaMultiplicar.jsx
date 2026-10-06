import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    numero = React.createRef();
    state = {
        operacion: [],
        resultado: []
    }

    generarTablas = (event) => {
        event.preventDefault();
        let num = this.numero.current.value;
        let op = [];
        let res = [];

        for(let i = 1; i <= 10; i++){
            op.push(num + " * " + i);
            res.push(num * i)
        }
        this.setState({
            operacion: op,
            resultado: res
        })
    }

    mostrarTablas = () => {
        let lista = []
        for(let i = 0; i < 10; i++){
            lista.push(
                <tr key={i}>
                    <td>{this.state.operacion[i]}</td>
                    <td>{this.state.resultado[i]}</td>
                </tr>
            )
        }
        return lista;
    }

    
    render() {
        return (
        <div>
            <h1>Tabla de multiplicar</h1>
            <form onSubmit={this.generarTablas}>
                <label>Introduce un numero: </label>
                <input type="number" ref={this.numero} />
                <button>Mostrar tablas</button>
            </form>
            {
                this.state.operacion &&
                <table>
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mostrarTablas()}
                    </tbody>
                </table>
            }
        </div>
        )
    }
}
