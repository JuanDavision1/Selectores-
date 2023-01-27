import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CodigoResponse, PaisSmall } from '../interfaces/paisesinterface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
private _continentes: string[]=[ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
private _baseurl:string= 'https://restcountries.com/v2'
get continentes():string[]{
  return [...this._continentes];
}

constructor(private http: HttpClient) { }
getpaisesporregion(region:string):Observable<PaisSmall[]>{
  return this.http.get<PaisSmall[]>(`${this._baseurl}/region/${region}?fields=alpha3Code,name`)

}
getpaisesporcodigo(codigo:string):Observable<CodigoResponse| null>{
  if(!codigo){
    return of(null)
  }
  return this.http.get<CodigoResponse>(`${this._baseurl}/alpha/${codigo}`)

}

getpaisesporcodigosmall(codigo:string):Observable<PaisSmall| null>{

  return this.http.get<PaisSmall>(`${this._baseurl}/alpha/${codigo}?fields=alpha3Code,name`)

}
}
