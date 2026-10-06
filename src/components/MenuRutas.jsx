import { Component } from "react";

export default class MenuRutas extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <a href="/">Home |</a>
                    </li>
                    <li>
                        <a href="/cine">Cine |</a>
                    </li>
                    <li>
                        <a href="/musica">Musica |</a>
                    </li>
                    <li>
                        <a href="/formSimple">Formulario Simple |</a>
                    </li>
                    <li>
                        <a href="/collatz">Collatz |</a>
                    </li>
                    <li>
                        <a href="/tablaMultiplicar">Tabla Multiplicar |</a>
                    </li>
                    <li>
                        <a href="/tablaMultiplicarV2">Tabla Multiplicar version 2|</a>
                    </li>
                    <li>
                        <a href="/seleccionMultiple">Seleccion multiple|</a>
                    </li>
                </ul>
            </div>
        )
    }
}