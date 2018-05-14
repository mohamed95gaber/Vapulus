import { Component, OnInit, Input } from '@angular/core';
import { IContact } from '../../interfaces/IContact';

@Component({
  selector: 'app-contactitem',
  templateUrl: './contactitem.component.html',
  styleUrls: ['./contactitem.component.css']
})
export class ContactitemComponent implements OnInit {
  constructor() { }
  @Input() contact:IContact;
  
  ngOnInit() {
  }

}
