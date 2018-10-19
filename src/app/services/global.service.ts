import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private urlApi:string = "https://api.spotify.com/v1/";
  private authorization:string = 'Bearer BQCET8VmfNmloo5h2W01W-QAbSjYU1A55qjHQenoJcDBNfQStKm3qc1vGCPdyMiQCcQe7WpVIsOzxBp2g8I';

  constructor() { }

  public getUrlApi(){
    return this.urlApi;
  }

  public getAutorization(){
    return this.authorization;
  }
}
