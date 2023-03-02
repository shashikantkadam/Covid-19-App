import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
covidUrl=`${environment.covidBaseUrl}`
  constructor(private _http: HttpClient) { }
  getNationalData(){
    return this._http.get(this.covidUrl)
  }
  getStateNames(){
    return this._http.get('statecodes.json')
  }
  // getSingleObject(id: number){
  //   let singleObjectUrl = `${this.covidUrl}/${id}`
  //   return this._http.get(singleObjectUrl)
  // }
  
}
