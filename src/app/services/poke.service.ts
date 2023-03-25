import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  urlBase:string = 'https://pokeapi.co/api/v2/pokemon/'
  constructor(private http: HttpClient) { }

  getList(page: number = 0){
    return this.http.get(this.urlBase, {
      params:{
        "offset":page,
        "limit": 10
      },
    });
  }
  getPokeData(nombre:string){
    return this.http.get(this.urlBase + nombre)
  }
}
