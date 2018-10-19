import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent implements OnInit {

  dataLanzamientos:any = {};

  constructor(
    private solicitudes:SolicitudesService,
    private router: Router
  ) {
    this.ultimosLanzamientos();
   }

  ngOnInit() {
  }

  private ultimosLanzamientos(){
    this.solicitudes.ultimosLanzamientos().subscribe(res=>{
        this.dataLanzamientos = res;
        this.dataLanzamientos = this.dataLanzamientos.albums.items;        
    });
  }

  public cargarartista(item:any){
    this.router.navigate([ '/artista', item.id  ]);
  }


}
