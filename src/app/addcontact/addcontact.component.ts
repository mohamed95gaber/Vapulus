import { Component, OnInit } from '@angular/core';
import { IContact } from '../interfaces/IContact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
public firstname:string;
public lastname:string;
public newcontact:IContact;
public img:string;
public phone:number;

  constructor(private contactItems:ContactsService) {
    
   }

  ngOnInit() {
    
  }
add(){
  this.newcontact = {
    name:this.firstname,
    imgUrl:this.img,
    phone:this.phone
  }
  this.contactItems.recentcontacts.push(this.newcontact);

}
}
