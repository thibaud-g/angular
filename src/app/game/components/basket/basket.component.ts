import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(public BasketService: BasketService) { }

  ngOnInit(): void {
  }

}
