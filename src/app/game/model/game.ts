export interface Game {
}
// le code votre interface
// ce sont les données de l'api
// src/app/game/model/game.ts
export interface Deal {
    internalName: string;
    title: string;
    metacriticLink: string;
    dealID: string;
    storeID: string;
    gameID: string;
    salePrice: string;
    normalPrice: string;
    isOnSale: string;
    savings: string;
    metacriticScore: string;
    steamRatingText: string;
    steamRatingPercent: string;
    steamRatingCount: string;
    steamAppID: string;
    releaseDate: number;
    lastChange: number;
    dealRating: string;
    thumb: string;
  }
  
  export interface Store {
    storeID: string;
    storeName: string;
    isActive: number;
    images: Images;
  }
  
  export interface Images {
    banner: string;
    logo: string;
    icon: string;
  }