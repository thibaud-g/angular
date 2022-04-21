import { BasketService } from './../../services/basket.service';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  constructor(
    public GameService: GameService,
    public BasketService: BasketService,
  ) { }

  ngOnInit(): void {
  }

}
