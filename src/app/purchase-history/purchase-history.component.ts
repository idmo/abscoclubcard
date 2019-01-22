import { Component, OnInit } from '@angular/core';
import { AislesComponent } from '../aisles/aisles.component';
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

  isCollapsed = true;
  message: string;

  collapsed(): void {
    this.message = '+';
    console.log(this.message);
  }

  expanded(): void {
    this.message = '-';
  }



  constructor(private data: DataService) {
    
   }
   
  ngOnInit() {
  }

}
