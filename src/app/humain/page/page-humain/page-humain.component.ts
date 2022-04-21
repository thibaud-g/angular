import { HumainService } from './../../service/humain.service';
import { Humain } from './../../model/humain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-humain',
  templateUrl: './page-humain.component.html',
  styleUrls: ['./page-humain.component.scss']
})
export class PageHumainComponent implements OnInit {

  humains : Humain[] = [

    {
    name : "Jaques",
    icon : "👩‍🍳"   
    },
    {
      name : "Manon",
      icon : "🙍‍♀️"
    },
    {
      name : "Tristan",
      icon : "👨"
    },
    {
      name : "Clément",
      icon : "👩‍🦱"
    }
  ]
   lists : Humain[] = this.humainService.restorer()

    ajouterHumain(nvHumain : Humain) : void{
      this.lists.push(nvHumain)
      this.humainService.sauvegarder(this.lists)
    }

    supprimerHumain(index : number):void{
      this.lists.splice(index,1)
      this.humainService.sauvegarder(this.lists)
    }

    sauvegarder(): void{
      this.humainService.sauvegarder(this.lists)
      
    }
  constructor(private humainService: HumainService) { }

  ngOnInit(): void {
  }

}
