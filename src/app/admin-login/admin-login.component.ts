import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username=""
  password=""

  constructor(private route:Router){}

  adminValues=()=>{
    let data:any={"username":this.username,"password":this.password}
    if(this.username=="admin" && this.password=="12345"){
      this.route.navigate(['/add'])
    }
    else{
      alert("the usernme or password is incorrect")
    }
  }

}
