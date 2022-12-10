import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  image=""
  title=""
  discription=""
  rate=""
  seller=""
  quantity=""

  


  addValues=()=>
  {
    let data:any={"image":this.image,"title":this.title,"discription":this.discription,"rate":this.rate,"seller":this.seller,"quantity":this.quantity}
    console.log(data)
  }

}
