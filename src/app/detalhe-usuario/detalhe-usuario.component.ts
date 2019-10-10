import { Component, OnInit, Input } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

  // O decorator @input diz que o pai vai mandar o valor para esse filho.
  // O valor virá pelo template (.html) do pai no caso app.component.html
  // Qualquer "pai" poderá add uma tag desse componente enviando um valor.
  // detalhe-usuario.component.html
  // <app-detalhe-usuario [contato]="contatoclicado"></app-detalhe-usuario>
  // contatoclicado é a var do .ts do pai.
  @Input() contato: ContatoModel;

  constructor() { }

  ngOnInit() {
  }

}
