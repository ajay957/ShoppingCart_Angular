import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchProduct=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  addProduct=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  fetchUser=()=>{
    return this.http.get("http://localhost:8080/adminview")
  }
  addUser=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/register",dataToSend)
  }
  searchProduct=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
}
