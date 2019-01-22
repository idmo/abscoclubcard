import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

// JSON files
import { good } from '../../assets/data/good.json'; 
import { elite } from '../../assets/data/elite.json';
import { occasional } from '../../assets/data/occasional.json';




@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {

  title = 'clubcard';
  clubCardMember = elite;
  isCollapsed: boolean;
  

  constructor(private data: DataService) {
    console.log(this.data.departments);
    
   }
   
  ngOnInit() {
  }

}
