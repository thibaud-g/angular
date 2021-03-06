import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    public GameService: GameService
  ) { }

  ngOnInit(): void {
    this.GameService.getStores().then((stores) => {
      this.GameService.getDeals();
    });
  }

}
