import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

import { ContatosDataBaseService } from './servicos/contatos-data-base.service';

@NgModule({
  declarations: [
    AppComponent,
    DadosUsuarioComponent,
    DetalheUsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContatosDataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
