import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
public term:string = ""
public carts:any = [
 {productname:'pen', price:10, rating: 2, freedelivery:true},
 {productname:'phone', price:20000, rating:4 , freedelivery:false},
 {productname:'shirt', price:1500, rating:5, freedelivery:true},
 {productname:'cap', price:200, rating:3, freedelivery:false},
 {productname:'mobile case', price:300, rating:3, freedelivery:false},
 {productname:'remot', price:500, rating:5, freedelivery:true},
]

freedelivery(){
  this.carts = this.carts.filter((cart:any)=>cart.freedelivery == true);
}

filter(){
  this.carts = this.carts.filter((carts:any)=>carts.productname.includes(this.term) );
}
priceLH(){
  this.carts = this.carts.sort((a:any,b:any) => a.price-b.price);
}
priceHL(){
  this.carts = this.carts.sort((a:any,b:any) => b.price-a.price);
}
ratingLH(){
  this.carts = this.carts.sort((a:any,b:any) => a.rating-b.rating);
}
ratingHL(){
  this.carts = this.carts.sort((a:any,b:any) => b.rating-a.rating);
}
discount(){
  this.carts = this.carts.map((cart:any) => {
    cart.price=cart.price/2;
    return cart;
  })
}
deliverycharges(){
  this.carts = this.carts.map((cart:any) => {
    cart.price=cart.price+50;
    return cart;
  })
}
delete(i:number){
  this.carts.splice(i,1);
}
price(){
  let total = this.carts.reduce((sum:any,cart:any)=> sum+cart.price,0);
  alert(total);
}
cartitems(){
  
  alert(this.carts.length);
}
}
