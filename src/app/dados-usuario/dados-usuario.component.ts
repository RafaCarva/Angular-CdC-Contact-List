import { Component, OnInit } from '@angular/core';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';
import { ContatoModel } from '../modelos/contato-model';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {

  enviado = false;
  nome: string;
  telefone: string;
  email: string;
  tipo: string;
  tipos: string[] = ['Particular', 'Trabalho', 'Amigos', 'Família'];

  constructor(private dataBaseService: ContatosDataBaseService) {}

  ngOnInit() {}

  enviarDados() {
    if (this.tipo === undefined) {
      this.tipo = this.tipos[0];
    }
    const novoContato = new ContatoModel(
      this.nome,
      this.telefone,
      this.email,
      this.tipo
    );

    this.dataBaseService.setContato(novoContato);
    this.enviado = !this.enviado;
  }

  voltar() {
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.tipo = '';
    this.enviado = !this.enviado;
  }

}
