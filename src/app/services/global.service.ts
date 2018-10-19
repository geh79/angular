import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private urlApi:string = "https://api.spotify.com/v1/";
  private authorization:string = 'Bearer BQBbO0QlkACDcpTrkVCvFEJvsA73vFGT-FG2vsA4oQ8Nsv-U4dTkukdkC1ortKoMyw4B9Bpsttp241DxweM';

  constructor() { }

  public getUrlApi(){
    return this.urlApi;
  }

  public getAutorization(){
    return this.authorization;
  }
}
