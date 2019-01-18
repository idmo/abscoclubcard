import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { of, pipe, fromEvent} from 'rxjs';
import { ajax } from 'rxjs/ajax'; 
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'; 

const searchBox = document.getElementById('search-box');

const typeahead = fromEvent(searchBox, 'input').pipe(
  map((e: KeyboardEvent) => (e.target as HTMLInputElement).value ),
  filter(text => text.length > 2),
  debounceTime(10),
  distinctUntilChanged(),
  switchMap(() => ajax('assets/good.json'))
  )




@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})


export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


