import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Icovid } from '../../model/data';
import { CovidService } from '../../services/covid.service';

@Component({
  selector: 'app-state-wise-view',
  templateUrl: './state-wise-view.component.html',
  styleUrls: ['./state-wise-view.component.scss'],
})
export class StateWiseViewComponent implements OnInit {
  stateNames: string[] =[]
  covidArr2 : any[] = []
  getData:Icovid[] =[]

  constructor(private covidService: CovidService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getStatenames()
  }

  getDistricts(res: any): Icovid[] {
    let finalList : any[] =[]
    for (let key in res) {
      for(let district in res[key].districts ){
        finalList.push({
          districtName : district,
          totalCount : this.getTotalCount(res[key].districts[district].total.confirmed),
          recovered : this.getTotalCount(res[key].districts[district].total.recovered),
          tested : this.getTotalCount(res[key].districts[district].meta.tested.last_updated),
          deaths : this.getTotalCount(res[key].districts[district].total.deceased),
        })
      }
    }
    return finalList;
  }

  getTotalCount(totalCount: number| undefined){
    if(totalCount){
      return totalCount
    }else{
      return 0
    }
  }
  getStatenames(){
    this.http.get('/assets/statecodes.json')
          .subscribe((res:any)=>{ 
            console.log(res)
            for(let key in res){
              console.log(res[key]);
              this.stateNames.push(res[key])
            }
          }
          )
    
  }
  onStateNameClick(id:any){
   this.covidService.getNationalData()
        .subscribe((res:any)=>{
          let newData:any[] = []
          for(let data in res){
            newData.push(res[data])
          }
          this.covidArr2 = newData.filter((obj, i:number) =>{
            if(i == (id-1)){
              return obj
            }
          })
          this.getData = this.getDistricts(this.covidArr2)
        })

  }
}
