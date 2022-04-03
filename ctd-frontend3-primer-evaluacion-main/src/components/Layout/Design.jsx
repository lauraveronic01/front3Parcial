import React, { Component } from "react";
import Registro from "../Registro/Registro";
import Buttons from "../Buttons/Buttons";
import Historia from "../Historia/Historia";
import data from "../data/data";
import Swal from "sweetalert2";

const registro = [];

export default class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      ultimaOpcionElegida: "",
    };
  }

  componentDidMount = () => {
    const alerta = {
      title: "Bienvenido/a, elige tu propia aventura 🏞🏞🏞",
      confirmButtonColor: "#000",
    };
    Swal.fire(alerta);
  };


  componentDidUpdate(seleccionAnterior) {
    if (seleccionAnterior.contador !== this.state.contador) {
      registro.push(this.state.ultimaOpcionElegida);
    }
  }

  handleClick = (element) => {
    const id = element.target.id;
    const contador = this.state.contador;
    const anterior = this.state.ultimaOpcionElegida;

    if (contador >= 7) {
        const confirmar = {
          title: "Tu camino ha finalizado ¿querés volver a empezar?",
          showCancelButton: true,
          confirmButtonColor: "#000",
          cancelButtonColor: "#b6b6b6",
          confirmButtonText: "Si",
          cancelButtonText: "No",
        };
        Swal.fire(confirmar)
          .then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }else{
              Swal.fire('Gracias por participar')
            }
          });
    
    } else if (id === "A" && anterior !== "A") {
      this.setState({
        contador: contador + 1,
        ultimaOpcionElegida: "A",
      });
    } else if (id === "A" && anterior === "A") {
      this.setState({
        contador: contador + 2,
        ultimaOpcionElegida: "A",
      });
    } else if (id === "B" && anterior === "A") {
      this.setState({
        contador: contador + 3,
        ultimaOpcionElegida: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: contador + 2,
        ultimaOpcionElegida: "B",
      });
    }
  };

  render() {
    return (
      <>
        <Historia contador={[this.state.contador]} />
        <Buttons
          handleClick={this.handleClick}
          selectA={data[this.state.contador].opciones.a}
          selectB={data[this.state.contador].opciones.b}
        />
        <Registro
          ultimaOpcionElegida={this.state.ultimaOpcionElegida}
          registro={registro.map(
            (registro, i) => (
              <li key={i}>{registro}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </>
    );
  }
}
