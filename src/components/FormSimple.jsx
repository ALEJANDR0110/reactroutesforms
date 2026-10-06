import React, { Component } from 'react'

export default class FormSimple extends Component {
    //VARIABLE DE REFERENCIA AL <input/>
    cajaNombre = React.createRef();

    //ACCION QUE SE REALIZA AL DARLE A UN BOTON EN EL FORMULARIO
    enviarInformacion = (event) => {
        //DEBEMOS DETENER EL SUBMIT
        event.preventDefault();
        let nombre = this.cajaNombre.current.value;
        console.log("Datos Enviados: " + nombre);
    }

  render() {
    return (
      <div>
        <h1>FormSimple</h1>
        <form onSubmit={this.enviarInformacion}>
            <label>Nombre: </label>
            <input type="text" ref={this.cajaNombre} />
            <button>Enviar Informacion</button>
        </form>
      </div>
    )
  }
}
