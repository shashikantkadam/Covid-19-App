import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../services/covid.service';

@Component({
  selector: 'app-national-view',
  templateUrl: './national-view.component.html',
  styleUrls: ['./national-view.component.scss']
})
export class NationalViewComponent implements OnInit {
   stateNames :any[]=[]
  constructor(private covidService : CovidService, private http : HttpClient) { }
  nationalData :any[]=[]
  ngOnInit(): void {
    this.getStatenames()
    this.getNationalData();
    
  }

  getNationalData(){
    this.covidService.getNationalData().subscribe((res:any)=>{
      console.log(res);
      for(let key in res){
        this.nationalData.push(res[key])
      }
      console.log(this.nationalData);
      
    })
  }

  getStatenames(){
    this.http.get('/assets/statecodes.json')
          .subscribe((res:any)=>{ 
            console.log(res)
            for(let key in res){
              console.log(res[key]);
              this.stateNames.push(res[key])
            }
            console.log(this.stateNames);
            
          }
          )
    
  }

}
