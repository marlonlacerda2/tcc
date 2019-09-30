import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licao1',
  templateUrl: './licao1.page.html',
  styleUrls: ['./licao1.page.scss'],
})
export class Licao1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides=[
    {
    img:'./assets/imgsvg/icon.svg',
    titulo:'TESTE 1'
    },
    {
    img:'./assets/imgsvg/icon.svg',
    titulo:'TESTE 2'
    },
    {
    img:'./assets/images/acordes.jpg',
    titulo:'TESTE 3'
    }
    


  ]


}
