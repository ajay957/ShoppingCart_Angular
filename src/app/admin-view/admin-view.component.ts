import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {

  constructor(private api:ApiService){
    api.fetchUser().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }
  data:any=[]

}
