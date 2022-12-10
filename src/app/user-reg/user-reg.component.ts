import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  name=""
  address=""
  phno=""
  email=""
  password=""
  confirmPassword=""


  constructor(private api:ApiService){}

  adduser=()=>{
    let data:any={"name":this.name,"address":this.address,"phno":this.phno,"email":this.email,"password":this.password, "confirmPassword":this.confirmPassword}
    console.log(data)
    this.api.addUser(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          alert("registerd successfully")
        }
        else{
          alert("something went wrong")
        }
      }
    )
  }

}
