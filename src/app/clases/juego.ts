export abstract class Juego {
  public nombre = "Sin Nombre";
  public jugador: string;
  public gano = false;
  public puntos = 0;

  constructor(nombre?: string, gano?: boolean, jugador?: string, puntos?: number) {
    if (nombre) this.nombre = nombre;

    if (gano) this.gano = gano;
    if (jugador) this.jugador = jugador;
    else this.jugador = "natalia natalia";

    if (puntos) this.puntos = puntos;
  }

  public abstract verificar(): boolean;

  public retornarAyuda() {
    return "NO hay Ayuda definida";
  }
}
