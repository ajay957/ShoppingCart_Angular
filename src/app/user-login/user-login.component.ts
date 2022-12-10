import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email=""
  password=""

  constructor(private route:Router){}

  userValues=()=>{
    let data:any={"email":this.email,"password":this.password}
    if (this.email=="user@gmail.com" && this.password=="12345"){
      this.route.navigate(['/view'])
    }
    else{
      alert("email or password is wrong")
    }
  }

}
