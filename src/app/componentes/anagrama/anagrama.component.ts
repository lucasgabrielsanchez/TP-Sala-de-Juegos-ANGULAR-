import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-anagrama",
  templateUrl: "./anagrama.component.html",
  styleUrls: ["./anagrama.component.css"],
})
export class AnagramaComponent implements OnInit {
  palabrasParaAdivinar = [
    "cartera",
    "paraguas",
    "cartel",
    "mesada",
    "margarita",
    "cocodrilo",
    "puerta",
    "sonrisa",
    "celeste",
    "caracol",
    "huevo",
    "cocina",
    "flamenco",
  ];

  palabraSecreta: string = "init";
  palabraSecretaMezclada: string = "";
  palabraIngresada: string = "";
  mensajeAlUsuario: boolean = false;
  gano: boolean = false;
  temporizador: any;
  tiempo: any = 3;
  mostrarAyuda: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

  nuevoJuego() {
    this.gano = false;
    this.palabraSecreta = this.palabrasParaAdivinar[Math.floor(Math.random() * this.palabrasParaAdivinar?.length)];

    // let arrayDeCaracteresOrdenados = [...this.palabraSecreta];
    let arrayDeCaracteresOrdenados = Array.from(this.palabraSecreta);

    this.palabraSecretaMezclada = arrayDeCaracteresOrdenados
      .map((a) => ({ sort: Math.random(), value: a })) //Le agrego una key numerica aleatoria
      .sort((a, b) => a.sort - b.sort) //Las ordeno de menor a mayor
      .map((a) => a.value) //Hago una copia de los value al array nuevo
      .toString()
      .replace(/[\,]/gm, " ");
  }

  verificar() {
    if (this.palabraIngresada.toLowerCase() == this.palabraSecreta.toLowerCase()) {
      this.gano = true;
      // this.serviceJugadores.gano();
    } else {
      // this.serviceJugadores.perdio();
      this.mensajeAlUsuario = true;
      this.temporizador = setInterval(() => {
        //Comienza a correr el tiempo
        this.tiempo--;
        console.log("tiempo: ", this.tiempo);
        if (this.tiempo == 0) {
          clearInterval(this.temporizador); //Borro el contador
          this.tiempo = 3;
          this.mensajeAlUsuario = false;
        }
      }, 900);
    }
  }
}
