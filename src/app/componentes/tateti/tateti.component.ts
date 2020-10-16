import { Component, OnInit } from "@angular/core";

export interface CuadradoGrilla {
  texto: string;
}

@Component({
  selector: "app-tateti",
  templateUrl: "./tateti.component.html",
  styleUrls: ["./tateti.component.css"],
})
export class TatetiComponent implements OnInit {
  turnoUsuario: boolean = true;
  ganoUsuario: boolean = false;
  ganoPC: boolean = false;
  empate: boolean = false;

  // Lo que hace el tracker es ir guardando los espacios de la grilla
  // que estan ocupados, lo inicializo en null
  tracker: string[] = new Array(9).fill(null);

  cuadradosGrilla: CuadradoGrilla[] = [
    { texto: "" }, // 0
    { texto: "" }, // 1
    { texto: "" }, // 2
    { texto: "" }, // 3
    { texto: "" }, // 4
    { texto: "" }, // 5
    { texto: "" }, // 6
    { texto: "" }, // 7
    { texto: "" }, // 8
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {
    // this.serviceJugadores.updatePlayer();
    // console.log("Se llamo al onDestroy");
  }

  usuarioColocaLaX(indice: number): void {
    //Si el punto donde quiere poner el usuario la 'X' es null
    // y si no gano nadie

    if (this.tracker[indice] == null && !this.ganoUsuario && !this.ganoPC) {
      this.tracker[indice] = "X"; //Escribo una X en el tracker (todavia no en la grilla)
      this.cuadradosGrilla[indice].texto = "./assets/equis.png"; //Pongo la X en el cuadrado de la grilla En el indice del tracker
      this.ganoUsuario = this.verSiAlguienGano(); //Ya que pongo la X me fijo si alguien gano
      this.turnoUsuario = false; //el turno termino
      if (!this.ganoUsuario) {
        //Si no gano el usuario, me fijo el movimiento de la PC aleatorio
        this.verSiguienteMovimientoPC();
        this.ganoPC = this.verSiAlguienGano(); //Otra ves me fijo si alguien gano
        if (this.ganoPC) {
          // Si gano la pc, el turno termino (solo tema de titulo del html)
          this.turnoUsuario = false;
          // this.serviceJugadores.perdio();
        }
      } else {
        // this.serviceJugadores.gano();
      }
    }
  }

  /*
    La grilla es
    0 1 2
    3 4 5
    6 7 8

    Entonces comparo cada vez que hay un movimiento si alguno gano
    PERO verificando que no sea null cada grilla, porque si no puede haber 3 null iguales
  */
  verSiAlguienGano(): boolean {
    if (
      (this.tracker[0] != null && this.tracker[0] == this.tracker[1] && this.tracker[0] == this.tracker[2]) ||
      (this.tracker[3] != null && this.tracker[3] == this.tracker[4] && this.tracker[3] == this.tracker[5]) ||
      (this.tracker[6] != null && this.tracker[6] == this.tracker[7] && this.tracker[6] == this.tracker[8]) ||
      (this.tracker[0] != null && this.tracker[0] == this.tracker[3] && this.tracker[0] == this.tracker[6]) ||
      (this.tracker[1] != null && this.tracker[1] == this.tracker[4] && this.tracker[1] == this.tracker[7]) ||
      (this.tracker[2] != null && this.tracker[2] == this.tracker[5] && this.tracker[2] == this.tracker[8]) ||
      (this.tracker[0] != null && this.tracker[0] == this.tracker[4] && this.tracker[0] == this.tracker[8]) ||
      (this.tracker[2] != null && this.tracker[2] == this.tracker[4] && this.tracker[2] == this.tracker[6])
    ) {
      return true;
    }
    return false;
  }

  verSiguienteMovimientoPC(): void {
    let pcYaPusoCirculo = false;

    console.log(
      "every->",
      this.tracker.every((dato) => dato !== null)
    );
    if (this.tracker.every((dato) => dato !== null)) {
      // console.log('empato');
      this.empate = true;
    } else {
      while (!pcYaPusoCirculo) {
        // console.log(this.tracker);
        let posibleIndiceParaMoverPC = Math.floor(Math.random() * 9);
        // console.log(Math.floor(Math.random() * 9));

        if (this.tracker[posibleIndiceParaMoverPC] == null) {
          this.tracker[posibleIndiceParaMoverPC] = "0";
          this.cuadradosGrilla[posibleIndiceParaMoverPC].texto = "./assets/circle.png";
          this.turnoUsuario = true;
          pcYaPusoCirculo = true;
        }
      }
    }
  }

  reiniciar() {
    this.tracker = this.tracker.fill(null);
    this.ganoPC = false;
    this.ganoUsuario = false;
    this.empate = false;
    this.cuadradosGrilla = [
      { texto: "" }, // 0
      { texto: "" }, // 1
      { texto: "" }, // 2
      { texto: "" }, // 3
      { texto: "" }, // 4
      { texto: "" }, // 5
      { texto: "" }, // 6
      { texto: "" }, // 7
      { texto: "" }, // 8
    ];
  }
}
