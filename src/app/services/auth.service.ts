import { Injectable } from '@angular/core';
import { HttpClient, HttpParams , HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  public obtenerToken(){

    let parametros = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', '------')
      .set('client_secret', '-----');

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods','GET,HEAD,OPTIONS,POST,PUT');

      //TODO, Implemntar cors
    this.http.post('https://accounts.spotify.com/api/token',parametros,{headers})
    .subscribe(res=>{
      console.log(res);
    });

  }
}
