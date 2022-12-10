import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  category=""

  searchData:any=[]

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"category":this.category}
    console.log(data)
    this.api.searchProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0){
          alert("invalid category")
        }
        else{
          this.searchData=response;
        }
      }
    )
  }
}
