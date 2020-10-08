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
      destino: "Veloclickraptor",
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
      destino: "PiedraPapelTijera",
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
      destino: "Tateti",
    },
    {
      img: "./assets/imagenes/cerebro.jpg",
      titulo: "Memotest",
      descripcion: "Juego de agilidad mental",
      destino: "Memotest",
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}
  Juego(tipo: string) {
    switch (tipo) {
      case "PiedraPapelTijera":
        this.router.navigate(["/Juegos/PiedraPapelTijera"]);
        break;
      case "Tateti":
        this.router.navigate(["/Juegos/Tateti"]);
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
      case "Memotest":
        this.router.navigate(["/Juegos/Memotest"]);
        break;
      case "Veloclickraptor":
        this.router.navigate(["/Juegos/Veloclickraptor"]);
        break;
    }
  }
}
