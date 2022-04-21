import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './components/stores/stores.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BasketComponent } from './components/basket/basket.component';
import { DealsComponent } from './components/deals/deals.component';
import { GameComponent } from './page/game/game.component';



@NgModule({
  declarations: [
    StoresComponent,
    LoaderComponent,
    BasketComponent,
    DealsComponent,
    GameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
