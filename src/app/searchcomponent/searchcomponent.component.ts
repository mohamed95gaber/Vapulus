import { Component, OnInit } from '@angular/core';
import { IContact } from '../interfaces/IContact';

@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrls: ['./searchcomponent.component.css']
})
export class SearchcomponentComponent implements OnInit {
searchtxt:string;
  constructor() { }

  ngOnInit() {
  }
 Search(){
 }
}
