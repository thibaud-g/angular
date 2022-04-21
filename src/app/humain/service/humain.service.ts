import { Injectable } from '@angular/core';
import { Humain } from '../model/humain';

@Injectable({
  providedIn: 'root'
})
export class HumainService {

  constructor() { }
  private key: string = 'humain';

  public sauvegarder(humains: Humain[]): void {
    // Conversion de notre variable en JSON
    const humainsConverties = JSON.stringify(humains);

    // Sauvegarde de nos données dans le navigateur
    localStorage.setItem(this.key, humainsConverties);
  }

  public restorer(): Humain[] {
    // Récupération des données dans le navigateur au format JSON
    const humainsConverties = localStorage.getItem(this.key);

    // on teste si des données sont bien présente
    if (humainsConverties) {
      // Conversion de nos données JSON en variable
      const humainsDeConverties = JSON.parse(humainsConverties);

      // On retourne nos todolist et on indique que c'est bien une list de Todo
      return humainsDeConverties as Humain[];
    }

    // Si aucune donnée n'est présente dans le navigateur on lui retourne une TodoList Vide
    return [];
  }
}