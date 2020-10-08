import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { JuegoPiedraPapelTijera } from "../../clases/juego-piedra-papel-tijera";

@Component({
  selector: "app-piedra-papel-tijera",
  templateUrl: "./piedra-papel-tijera.component.html",
  styleUrls: ["./piedra-papel-tijera.component.css"],
})
export class PiedraPapelTijeraComponent implements OnInit {
  nuevoJuego: JuegoPiedraPapelTijera;
  public parametro;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.nuevoJuego = new JuegoPiedraPapelTijera();
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      //la funcion callback no t permite salir del ambito de la funcion a la clase y no reconoce el parametro 'parametro', por eso se usa la expresion lambda
      this.parametro = params["valor"];
      console.log(params);
    });
  }

  public generarEleccion() {
    this.nuevoJuego.generarEleccionAleatoria();
  }

  public elegirImagen(imagen: string) {
    this.nuevoJuego.eleccionUsuario = imagen;
    this.nuevoJuego.verificar();
  }

  redirigirAMenuJuegos() {
    this._router.navigate(["/Juegos"]);
  }
}
