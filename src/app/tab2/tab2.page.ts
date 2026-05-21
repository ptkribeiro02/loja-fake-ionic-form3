import { Component, OnInit } from '@angular/core';

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
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],

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

export class Tab2Page implements OnInit {

  produtos: Produto[] = [];

  indice = 0;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {

    this.carregarProdutos();

  }

  carregarProdutos() {

    this.produtoService.getProdutos().subscribe(res => {

      this.produtos = res;

      console.log(this.produtos);

    });

  }

  proximo() {

    if(this.indice < this.produtos.length - 1) {

      this.indice++;

    }

  }

  anterior() {

    if(this.indice > 0) {

      this.indice--;

    }

  }

}