import { Component, OnInit } from '@angular/core';

import { cart } from '../../assets/data/cart.json';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  myCart = cart; 
  constructor() { }

  ngOnInit() {
   
  }

}
