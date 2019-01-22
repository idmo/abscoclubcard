/*
I'm moving the references to the JSON files into a separate
Service so they can be resued in other components across the app.
This will help for showing things like the count or number of items
in an object.
*/
import { Injectable } from '@angular/core';
// Club Card Data
import { occasional } from '../assets/data/occasional.json'; //barely uses their card
import { good } from '../assets/data/good.json'; //
import { elite } from '../assets/data/elite.json';

// Mock Data
import { cart } from '../assets/data/cart.json';
import { list } from '../assets/data/shopping-list.json'; 



@Injectable({
  providedIn: 'root'
})
export class DataService {

  // choose one of the clubcard datafiles
  //TODO: refactor this later to be set by a route.
  clubcard = elite;
  
  /*
  The clubcard data originated as a CSV file and had column headings make arrays
  for each one we want to use. The reduce and assign fuctions create new arrays with
  unique instances of the key values.
  */
  departments = Object.keys(this.clubcard.reduce((acc,cur)=>Object.assign(acc,{[cur.department]:cur}),{}));
  aisles = Object.keys(this.clubcard.reduce((acc,cur)=>Object.assign(acc,{[cur.aisle]:cur}),{}));
  shelves = Object.keys(this.clubcard.reduce((acc,cur)=>Object.assign(acc,{[cur.shelf]:cur}), {}));

  last30days = this.clubcard.filter(days => days.daysSinceLastPurchase < 30);
  over30days = this.clubcard.filter(days => days.daysSinceLastPurchase > 30);
  frequentPurchases = this.clubcard.filter(days => days.daysBetweenPurchase < 20);


  constructor() { }
}
