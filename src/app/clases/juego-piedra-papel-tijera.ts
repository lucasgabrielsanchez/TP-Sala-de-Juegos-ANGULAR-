import { Juego } from "../clases/juego";

export class JuegoPiedraPapelTijera extends Juego {
  arrayOpciones: Array<string>;
  eleccionOponente: string;
  eleccionUsuario: string;
  empato: boolean;
  perdio: boolean;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super("Piedra Papel o Tijera", gano, jugador);

    this.arrayOpciones = ["piedra", "papel", "tijera"];
  }

  public verificar() {
    this.gano = false;
    this.perdio = false;
    this.empato = false;

    if (this.eleccionUsuario == this.eleccionOponente) {
      this.empato = true;
      console.info("EMPATO!!!");
      return false;
    }

    switch (this.eleccionUsuario) {
      case "piedra":
        if (this.eleccionOponente == "tijera") {
          this.gano = true;
        }
        break;

      case "papel":
        if (this.eleccionOponente == "piedra") {
          this.gano = true;
        }
        break;

      case "tijera":
        if (this.eleccionOponente == "papel") {
          this.gano = true;
        }
        break;
    }

    if (this.gano) {
      console.info("GANO!!!");
      return true;
    } else {
      console.info("PERDIO!!!");
      this.perdio = true;
      return false;
    }
  }

  public generarEleccionAleatoria() {
    let aux = Math.floor(Math.random() * 3 + 0);
    this.eleccionOponente = this.arrayOpciones[aux];
    console.info("Eleccion oponente:" + this.eleccionOponente);
    this.gano = false;
  }
}
