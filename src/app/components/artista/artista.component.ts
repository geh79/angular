import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudesService } from '../../services/solicitudes.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  private artista:any = {};
  private top:any = {};


  constructor(
    private solicitudes:SolicitudesService,
     private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params =>{
      this.verdetalle(params['id']);
      this.track(params['id']);
    });

   }



  ngOnInit() {
  }

  private verdetalle(id:string){
    this.solicitudes.detalleArtista(id).subscribe(res=>{
        this.artista = res;
        console.log(this.artista)
    });
  }

  private track(id:string){
    this.solicitudes.topTrack(id).subscribe(res=>{
        this.top = res;
        this.top = this.top.tracks;
    });
  }

}
