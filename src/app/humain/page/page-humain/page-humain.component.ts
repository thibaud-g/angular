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
    icon : "π©βπ³"   
    },
    {
      name : "Manon",
      icon : "πββοΈ"
    },
    {
      name : "Tristan",
      icon : "π¨"
    },
    {
      name : "ClΓ©ment",
      icon : "π©βπ¦±"
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
