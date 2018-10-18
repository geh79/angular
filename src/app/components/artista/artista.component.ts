import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  private artista:any = {};

  constructor(
     private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params =>{
      console.log(params['id']);
        // this.artista = this._heroesService.getHeroe( params['id'] );
        // console.log(this.heroe);
    });

   }



  ngOnInit() {
  }

}
