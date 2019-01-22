import { Component, OnInit } from '@angular/core';

import { myList } from '../../assets/data/shopping-list.json'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  shoppingList = myList;
  constructor() { }

  ngOnInit() {
    
  }

}
