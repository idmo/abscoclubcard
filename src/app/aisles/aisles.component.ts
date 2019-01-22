import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aisles',
  templateUrl: './aisles.component.html',
  styleUrls: ['./aisles.component.scss']
})
export class AislesComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
