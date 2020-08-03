import { Injectable } from '@angular/core';
import { Spending, Category } from './spending.model';
@Injectable({
  providedIn: 'root'
})
export class SpendigsService {
  private spendings: Spending[];
  private categorias: Category[];
  constructor() {
    this.categorias = [
      {
        id: 0,
        description: 'Comida',
        price: null
      },
      {
        id: 1,
        description: 'Transporte',
        price: null
      },
      {
        id: 2,
        description: 'Gasolina',
        price: 1
      },
      {
        id: 3,
        description: 'Otros',
        price: null
      },
    ];
    this.spendings = [];
  }
  getCategorias() {
    return this.categorias;
  }
  getSpendings() {
    return this.spendings;
  }
  addSpending(spending: Spending) {
    this.spendings.push(spending);
  }
  newSpending(): Spending {
    return {
      id: this.spendings.length,
      concept: '',
      startdate: null,
      category: 0,
      amount: null,
      price: null,
      comments: '',
      photo: null
    }
  }

}
