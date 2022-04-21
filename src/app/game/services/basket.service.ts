// src/app/game/services/basket.service.ts
import { Injectable } from '@angular/core';
import { Deal } from '../model/game';

export type Basket = ItemBasket[];

export interface ItemBasket {
  deal: Deal;
  quantite: number;
}

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: Basket = [];

  constructor() {}

  /** retourne le nombre de deals dans le panier */
  public getTotalItemsBasket(): number {
    return this.basket.length;
  }

  /** retourne le prix du panier */
  public getTotalPrice(): number {
    let totalPrice = 0;
    this.basket.forEach(
      (item) => (totalPrice += Number(item.deal.salePrice) * item.quantite)
    );
    return totalPrice;
  }

  /** retourne le prix sans réduction du panier */
  public getTotalNormalPrice(): number {
    let totalPrice = 0;
    this.basket.forEach(
      (item) => (totalPrice += Number(item.deal.normalPrice) * item.quantite)
    );
    return totalPrice;
  }

  /** supprime un élément au panier */
  public removeToBasket(deal: Deal): void {
    this.basket.splice(this.findDealInBasket(deal), 1);
  }

  /** ajoute un élément au panier */
  public addToBasket(deal: Deal): void {
    const index = this.findDealInBasket(deal);

    if (index > -1) {
      this.basket[index].quantite++;
      return;
    }

    this.basket.push({ deal, quantite: 1 });
  }

  // Retourne un index d'un élément du panier
  public findDealInBasket(deal: Deal): number {
    return this.basket.findIndex(
      (itemBasket) => itemBasket.deal.gameID === deal.gameID
    );
  }
}