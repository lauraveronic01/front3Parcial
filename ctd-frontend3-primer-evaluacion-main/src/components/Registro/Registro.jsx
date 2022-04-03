import React, { Component } from "react";

export default class Registro extends Component {
  render() {
      const {ultimaOpcionElegida, registro} = this.props;
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {ultimaOpcionElegida}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{registro}</ul>
      </div>
    );
  }
}
