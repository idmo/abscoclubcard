import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { of, pipe, fromEvent} from 'rxjs';
import { ajax } from 'rxjs/ajax'; 
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'; 

import { DataService } from '../data.service';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})


export class PracticeComponent implements OnInit {

  constructor(private data: DataService) { }


  ngOnInit() {
    //var seeds = this.data.clubcard.filter(seeds => seeds.shelf === "Seeds")
    var clubcard = this.data.clubcard;
    var depts = Object.keys(clubcard.reduce((acc,cur)=>Object.assign(acc,{[cur.department]:cur}),{}));

    console.log(this.data.departments);
    console.log(this.data.aisles);
    console.log(this.data.shelves);
    
    

  }

}


