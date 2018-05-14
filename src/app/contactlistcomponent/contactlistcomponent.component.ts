import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { IContact } from '../interfaces/IContact';

@Component({
  selector: 'app-contactlistcomponent',
  templateUrl: './contactlistcomponent.component.html',
  styleUrls: ['./contactlistcomponent.component.css']
})
export class ContactlistcomponentComponent implements OnInit {
  recentContacts:IContact[];
  aContacts:IContact[];
  bContacts:IContact[];
  cContacts:IContact[];
  
  
  constructor(private contactItems:ContactsService) { }

  ngOnInit() {
     this.recentContacts =this.contactItems.getRecentContacts;
     this.aContacts =this.contactItems.getAContacts;
     this.bContacts =this.contactItems.getBContacts;
     this.cContacts =this.contactItems.getCContacts; 
  }

}
