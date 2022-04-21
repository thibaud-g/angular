// src/app/game/services/game.service.ts
import { Injectable } from '@angular/core';
import { Deal, Store } from '../model/game';

export interface FilterDeal {
  storeID?: string[];
  upperPrice?: number;
  lowerPrice?: number;
  pageNumber?: number;
  title?: string;
}

interface _FilterDeal extends FilterDeal {
  pageNumber: number;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  /**
   * La liste de tous les stores
   */
  stores: Store[] | null = null;
  /**
   * La liste de tous les produits
   */
  deals: Deal[] | null = null;
  /**
   * Le filtre qui permet de faire des recherches
   */
  private filterDeal: _FilterDeal = this.getDefaultSearchDeal();
  /**
   * Le nombre de page de la recherche
   */
  totalPageCount: number = 0;
  /**
   *
   */
  inLoad: boolean = false;

  constructor() {}

  // Retourne le filtre de recherche
  public getFilterDeal(): FilterDeal {
    return this.filterDeal;
  }

  // set les paramètre de recherche
  public setFilterDeal(filterDeal: FilterDeal): void {
    this.filterDeal = { ...this.filterDeal, ...filterDeal, pageNumber: 1 };
  }

  // nettoie le filtre de recherche
  public cleanFilterDeal(): void {
    this.filterDeal = this.getDefaultSearchDeal();
  }

  // retourne le filtre par défault
  public getDefaultSearchDeal(): _FilterDeal {
    return {
      pageNumber: 1,
    };
  }

  // retourne un store par son id
  public getStoreById(storeId: string): Store | null {
    if (!this.stores) return null;

    return this.stores.find((store) => store.storeID === storeId) ?? null;
  }

  // retourne url de l'image d'un store via son image
  public getStoreUrlImg(storeImageUrl: string | undefined): string {
    if (!storeImageUrl) return '';
    return 'https://www.cheapshark.com/' + storeImageUrl;
  }

  // retourne tous les stores
  public getStores(): Promise<Store[]> {
    return fetch('https://raw.githubusercontent.com/SalvadorCardona/angular-formation/master/src/assets/store.json')
      .then((response) => response.json())
      .then((data) => {
        this.stores = data;
        return data;
      });
  }

  // Change la page de recherche 
  public nextDealPage(): void {
    if (this.filterDeal.pageNumber >= this.totalPageCount) return;

    this.filterDeal.pageNumber++;
    this.getDeals();
  }

  // change la page de recherche
  public prevDealPage(): void {
    this.filterDeal.pageNumber--;
    this.getDeals();
  }

  // retourne les deals
  public getDeals(): Promise<Deal[]> {
    let endPoint = 'https://raw.githubusercontent.com/SalvadorCardona/angular-formation/master/src/assets/deals.json';
    endPoint = endPoint + '?' + this.objToQueryString(this.filterDeal);

    this.inLoad = true;

    return fetch(endPoint)
      .then((response) => {
        this.totalPageCount = Number(
          response.headers.get('x-total-page-count')
        );
        return response.json();
      })
      .then((data) => {
        this.deals = data;
        this.inLoad = false;
        return data;
      });
  }

  // ne pas chercher à comprendre 
  private objToQueryString(obj: FilterDeal): string {
    const keyValuePairs = [];
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
      keyValuePairs.push(
        `${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(
          Object.values(obj)[i]
        )}`
      );
    }
    return keyValuePairs.join('&');
  }
}