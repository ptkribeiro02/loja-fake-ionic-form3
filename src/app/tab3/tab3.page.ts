import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { ProdutoService } from '../services/produto.service';

import { Produto } from '../models/produto';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],

  imports: [
    CommonModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,

    IonButton
  ]
})

export class Tab3Page {

  produtos: Produto[] = [];

  mostrar = false;

  constructor(private produtoService: ProdutoService) {}

  carregarProdutos() {

    this.produtoService.getProdutos().subscribe(res => {

      this.produtos = res;

      this.mostrar = true;

    });

  }

  ocultarProdutos() {

    this.mostrar = false;

    this.produtos = [];
  }

}