import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favoriteProducts:any[]=[];
  total:number =0||1;
  quantity:number=1;
  favorite:number=0;
  constructor() { }

  ngOnInit(): void {
    this.getFavoriteProducts();

  }

  
  getFavoriteProducts(){

    if('favorite' in localStorage){
      this.favoriteProducts = JSON.parse(localStorage.getItem('favorite')!);
  }
  console.log( this.favoriteProducts);
  this.getTotal()
}



getTotal(){
  this.total=0;

  for(let i in this.favoriteProducts ){
    this.total += this.favoriteProducts[i].price * (this.favoriteProducts[i].quantity)||0;
  }
  return this.total;

}

getmax(index:number){
  this.favoriteProducts[index].quantity++;
  this.getTotal();
  localStorage.setItem('favorite',JSON.stringify(this.favoriteProducts));
}
getmin(index:number){
  if(this.quantity>0){
  Math.abs(this.favoriteProducts[index].quantity--);
  this.getTotal();
  localStorage.setItem('favorite',JSON.stringify(this.favoriteProducts));


  }
}

deleteItem(index:number){
  this.favoriteProducts.splice(index,1);
  this.getTotal();
  localStorage.setItem('favorite',JSON.stringify(this.favoriteProducts));

}

clearProducts(){
  this.favoriteProducts = [];
  this.getTotal();
  localStorage.setItem('favorite',JSON.stringify(this.favoriteProducts));

}

}
