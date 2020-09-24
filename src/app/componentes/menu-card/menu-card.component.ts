import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: "app-menu-card",
  templateUrl: "./menu-card.component.html",
  styleUrls: ["./menu-card.component.css"],
})
export class MenuCardComponent implements OnInit {
  cards = [
    {
      img: "./assets/imagenes/cerebro.jpg",
      titulo: "VeloClickRaptor",
      descripcion: "Juego de agilidad manual",
      destino: "",
    },
    {
      img: "./assets/imagenes/cerebro.jpg",
      titulo: "Agilidad aritmética",
      descripcion: "Juego de agilidad mental",
      destino: "AgilidadaMasListado",
    },
    {
      img: "./assets/imagenes/ppt.jpg",
      titulo: "Piedra Papel o Tijera",
      descripcion: "Juega contra la máquina",
      destino: "",
    },
    {
      img: "./assets/imagenes/adivina.png",
      titulo: "Adivina el número",
      descripcion: "Juego de estrategia",
      destino: "AdivinaMasListado",
    },
    {
      img: "./assets/imagenes/cerebro.jpg",
      titulo: "Anagrama",
      descripcion: "Juego de agilidad mental",
      destino: "Anagrama",
    },
    {
      img: "./assets/imagenes/cerebro.jpg",
      titulo: "TaTeTi",
      descripcion: "Juego de agilidad mental",
      destino: "",
    },
    {
      img: "./assets/imagenes/cerebro.jpg",
      titulo: "Memotest",
      descripcion: "Juego de agilidad mental",
      destino: "",
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}
  Juego(tipo: string) {
    switch (tipo) {
      case "Adivina":
        this.router.navigate(["/Juegos/Adivina"]);
        break;
      case "Agilidad":
        this.router.navigate(["/Juegos/Agilidad"]);
        break;
      case "AdivinaMasListado":
        this.router.navigate(["/Juegos/AdivinaMasListado"]);
        break;
      case "AgilidadaMasListado":
        this.router.navigate(["/Juegos/AgilidadaMasListado"]);
        break;
      case "Anagrama":
        this.router.navigate(["/Juegos/Anagrama"]);
        break;
    }
  }
}
