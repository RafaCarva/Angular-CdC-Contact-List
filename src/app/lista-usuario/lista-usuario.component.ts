import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})

export class ListaUsuarioComponent implements OnInit {

  listaDeContatos: ContatoModel[] = [];

  /**
   * O decorator @Output permite que o filho se comunique com o pai.
   * O pai é o app.component.html
   * <app-lista-usuario (idClicado)='enviarDetalhe($event)'></app-lista-usuario>
   * enviarDetalhe() é o método de app.component.ts
   */
  @Output() idClicado = new EventEmitter();

  constructor(private dataBaseService: ContatosDataBaseService) {}

  ngOnInit() {
    /* Veja o arquivo contatos-data-base.service.ts
     O service injetado aqui possui o emissor do evento de cadastro de usuário.
     O que vai ser emitido é um array de ContatosModel que vai ser atribuido ao
     array de ContatosModel local.
        dataBaseService         .enviarContato
        (instância do service)  (var do tipo emmiter com um array setado como 'emitido')
    */
    this.dataBaseService.enviarContato.subscribe(
      contatos => (this.listaDeContatos = contatos));

    /**
     * Perceba que o .subscribe só existe na var do tipo EventEmitter()
     * (enviar contato é a var do service do tipo eventEmmiter).
     */
  }
  /**
   * Quando idClicado for 'emitido' o @output do pai vai executar o metodo <app-lista-usuario (idClicado)='enviarDetalhe($event)'>
   */
  contatoClidado(item: number) {
    this.idClicado.emit(item);
  }
}
