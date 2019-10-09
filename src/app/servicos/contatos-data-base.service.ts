import { Injectable, EventEmitter } from "@angular/core";
import { ContatoModel } from "../modelos/contato-model";

@Injectable({
  providedIn: "root"
})
export class ContatosDataBaseService {

  meusContatos: ContatoModel[] = [];
  enviarContato = new EventEmitter();

  constructor() {}

  setContato(novoContato: ContatoModel): void {
    this.meusContatos.push(novoContato);
    this.enviarContato.emit(this.meusContatos);
  }

  getContato(id: number):ContatoModel{
    let contato: ContatoModel;
    contato = this.meusContatos[id];
    return contato;
  }

}
