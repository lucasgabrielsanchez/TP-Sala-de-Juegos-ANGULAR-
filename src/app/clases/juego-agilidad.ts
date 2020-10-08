import { Juego } from "../clases/juego";
export class JuegoAgilidad extends Juego {
  operadores: Array<string>;
  primerNumero: number;
  segundoNumero: number;
  operador: string;
  resultadoOperacion: number;
  numeroIngresado: number;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super("Agilidad Aritmetica", gano, jugador);

    this.operadores = ["+", "-", "*", "/"];
  }

  public generarOperacion() {
    this.gano = false;
    this.primerNumero = Math.floor(Math.random() * 100 + 0);
    this.segundoNumero = Math.floor(Math.random() * 100 + 0);
    let aux = Math.floor(Math.random() * (4 - 0)) + 0;
    this.operador = this.operadores[aux];
    if (this.segundoNumero == 0 && this.operador == "/") {
      this.generarOperacion();
    }
    this.devolverResultado();

    console.info(
      "numero uno:" +
        this.primerNumero +
        "   --  numero dos:" +
        this.segundoNumero +
        "  --  operador:" +
        this.operador +
        "   -- Resultado: " +
        this.resultadoOperacion
    );
  }

  public devolverResultado() {
    switch (this.operador) {
      case "+":
        this.resultadoOperacion = Math.round(this.primerNumero + this.segundoNumero);
        break;

      case "-":
        this.resultadoOperacion = this.primerNumero - this.segundoNumero;
        break;

      case "*":
        this.resultadoOperacion = this.primerNumero * this.segundoNumero;
        break;

      case "/":
        this.resultadoOperacion = this.primerNumero / this.segundoNumero;
        break;
    }
  }

  public verificar() {
    if (this.numeroIngresado == this.resultadoOperacion) {
      this.gano = true;
    }
    if (this.gano) {
      return true;
    } else {
      return false;
    }
  }
}
