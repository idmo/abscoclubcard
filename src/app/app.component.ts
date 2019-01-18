import { Component, OnInit } from '@angular/core';


// JSON files
import { good } from '../assets/good.json'; 
import { elite } from '../assets/elite.json';
import { occasional } from '../assets/occasional.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clubcard';
  clubCardMember = elite;
  
  // for ratings
  max: number = 5;
  rate: number = 0;
  isReadOnly: boolean = false;

  // dept: string = "Beverages";
  // filter = this.clubCardMember.filter(item => item.department = this.dept );
  
  constructor() {
    
  }

}
