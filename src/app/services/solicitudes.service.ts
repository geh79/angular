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



  getQuery( ) {
    const headers = new HttpHeaders({
      'Authorization': this.globalServ.getAutorization()
    });

    return this.http.get(this.globalServ.getUrlApi()+"browse/new-releases?limit=20", { headers }).subscribe(res=>{
      console.log(res);
    });

  }
}
