import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-cabecera",
  templateUrl: "./cabecera.component.html",
  styleUrls: ["./cabecera.component.css"],
})
export class CabeceraComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: "Update",
        icon: "pi pi-refresh",
      },
      {
        label: "Delete",
        icon: "pi pi-times",
      },
      {
        label: "Angular Website",
        icon: "pi pi-external-link",
        url: "http://angular.io",
      },
      {
        label: "Router",
        icon: "pi pi-upload",
        routerLink: "/fileupload",
      },
    ];
  }
}
