import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(
    private http:HttpClient,
    private globalServ: GlobalService
  ) {

   }



  ultimosLanzamientos() {
    const headers = new HttpHeaders({
      'Authorization': this.globalServ.getAutorization()
    });

    return this.http.get(this.globalServ.getUrlApi()+"browse/new-releases?limit=10", { headers });
  }

  detalleArtista(idartista:string) {
    const headers = new HttpHeaders({
      'Authorization': this.globalServ.getAutorization()
    });

    return this.http.get(this.globalServ.getUrlApi()+"artists/"+idartista, { headers });
  }

  topTrack(idartista:string) {
    const headers = new HttpHeaders({
      'Authorization': this.globalServ.getAutorization()
    });

    return this.http.get(this.globalServ.getUrlApi()+"artists/"+idartista+"/top-tracks?country=us", { headers });
  }
}
