import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  constructor(public GameService: GameService) { }

  ngOnInit(): void {
  }
  goToStore(storeId: string): void{
    this.GameService.setFilterDeal({ storeID: [storeId] });
    this.GameService.getDeals()
  }
}
