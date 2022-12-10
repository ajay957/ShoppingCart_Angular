import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  image=""
  name=""
  category=""
  description=""
  price=""

  constructor(private api:ApiService){}


  addValues=()=>
  {
    let data:any={"image":this.image, "name":this.name, "category":this.category, "description":this.description,"price":this.price}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("product added successfully")
          this.image=""
          this.name=""
          this.category=""
          this.description=""
          this.price=""
        } else {
          alert("something went wrong")
        }
      }
    )
  }

}
