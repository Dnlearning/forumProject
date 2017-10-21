import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products=[];
  constructor() { }
  carts:Object[]=[];
  ngOnInit() {
    this.products=[
      {'name':'product1' , src:'assets/images/pro1.png'},
      {'name':'product2' , src:'assets/images/pro2.png'},
      {'name':'product3' , src:'assets/images/pro3.png'},
      {'name':'product4' , src:'assets/images/pro4.png'},
      {'name':'product5' , src:'assets/images/pro5.png'},
      {'name':'product6' , src:'assets/images/pro6.png'},
      {'name':'product7' , src:'assets/images/pro7.png'},
      {'name':'product8' , src:'assets/images/pro8.png'},
      {'name':'product9' , src:'assets/images/pro9.png'},
      
    ];
  }
  addCart(product){
    console.log(product);
    this.carts.push(product);
    console.log(this.carts);
  }
}
