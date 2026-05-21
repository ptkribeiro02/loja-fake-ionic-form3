import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {

    return this.http.get<Produto[]>(this.apiUrl);

  }

}