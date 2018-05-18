import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { IContact } from '../interfaces/IContact';
import { concat } from 'rxjs/observable/concat';


@Component({
  selector: 'app-contactlistcomponent',
  templateUrl: './contactlistcomponent.component.html',
  styleUrls: ['./contactlistcomponent.component.css']
})
export class ContactlistcomponentComponent implements OnInit {
  
  recentContacts: IContact[] = [];
  chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  aContacts: IContact[] = [];
  bContacts: IContact[] = [];
  cContacts: IContact[] = [];
  dContacts: IContact[] = [];
  eContacts: IContact[] = [];
  fContacts: IContact[] = [];
  gContacts: IContact[] = [];
  hContacts: IContact[] = [];
  iContacts: IContact[] = [];
  jContacts: IContact[] = [];
  kContacts: IContact[] = [];
  lContacts: IContact[] = [];
  mContacts: IContact[] = [];
  nContacts: IContact[] = [];
  oContacts: IContact[] = [];
  pContacts: IContact[] = [];
  qContacts: IContact[] = [];
  rContacts: IContact[] = [];
  sContacts: IContact[] = [];
  tContacts: IContact[] = [];
  uContacts: IContact[] = [];
  vContacts: IContact[] = [];
  wContacts: IContact[] = [];
  xContacts: IContact[] = [];
  yContacts: IContact[] = [];
  zContacts: IContact[] = [];
  searchContacts: IContact[] = [];
  message: boolean = false;


  constructor(private contactItems: ContactsService) { }

  ngOnInit() {
    this.contactItems.getRecentContacts().subscribe(b => {
      for (let i = 0; i < b.data.length; i++) {
        let contact: IContact = new Object();
        contact.name = b.data[i].firstName + " " + b.data[i].lastName;
        contact.imgUrl = b.data[i].image;
        contact.phone = b.data[i].mobileNumber;
        if (contact.name != undefined || contact.imgUrl != undefined || contact.phone != null) {
          this.recentContacts.push(contact);
        }
      }
    });
   if(this.contactItems.contacts.length == 0){
    this.contactItems.getContacts().subscribe(data => {
      for (let i = 0; i < data.data.length; i++) {
        let contact: IContact = new Object();
        contact.name = data.data[i].firstName + " " + data.data[i].lastName;
        contact.imgUrl = data.data[i].image;
        contact.phone = data.data[i].mobileNumber;
        if (contact.name != undefined || contact.imgUrl != undefined || contact.phone != null) {
          this.contactItems.contacts.push(contact);
        }
      }
        for (let x = 0; x < this.contactItems.contacts.length; x++) {
          if (this.contactItems.contacts[x].name.startsWith('A') || this.contactItems.contacts[x].name.startsWith('a')) {
            
            this.aContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('B') || this.contactItems.contacts[x].name.startsWith('b')) {
                      
            this.bContacts.push(this.contactItems.contacts[x]);
          }
  
          else if (this.contactItems.contacts[x].name.startsWith('C') || this.contactItems.contacts[x].name.startsWith('c')) {
                      
            this.cContacts.push(this.contactItems.contacts[x]);
          }
  
          else if (this.contactItems.contacts[x].name.startsWith('D') || this.contactItems.contacts[x].name.startsWith('d')) {
                      
            this.dContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('E') || this.contactItems.contacts[x].name.startsWith('e')) {
            
            this.eContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('F') || this.contactItems.contacts[x].name.startsWith('f')) {
            
            this.fContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('G') || this.contactItems.contacts[x].name.startsWith('g')) {
            
            this.gContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('H') || this.contactItems.contacts[x].name.startsWith('h')) {
            
            this.hContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('I') || this.contactItems.contacts[x].name.startsWith('i')) {
            
            this.iContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('J') || this.contactItems.contacts[x].name.startsWith('j')) {
            
            this.jContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('K') || this.contactItems.contacts[x].name.startsWith('k')) {
            
            this.kContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('L') || this.contactItems.contacts[x].name.startsWith('l')) {
            
            this.lContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('M') || this.contactItems.contacts[x].name.startsWith('m')) {
            
            this.mContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('N') || this.contactItems.contacts[x].name.startsWith('n')) {
            
            this.nContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('O') || this.contactItems.contacts[x].name.startsWith('o')) {
            
            this.oContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('P') || this.contactItems.contacts[x].name.startsWith('p')) {
            
            this.pContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('Q') || this.contactItems.contacts[x].name.startsWith('q')) {
            
            this.qContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('R') || this.contactItems.contacts[x].name.startsWith('r')) {
            
            this.rContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('S') || this.contactItems.contacts[x].name.startsWith('s')) {
            
            this.sContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('T') || this.contactItems.contacts[x].name.startsWith('t')) {
            
            this.tContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('U') || this.contactItems.contacts[x].name.startsWith('u')) {
            
            this.uContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('V') || this.contactItems.contacts[x].name.startsWith('v')) {
            
            this.vContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('W') || this.contactItems.contacts[x].name.startsWith('w')) {
            
            this.wContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('Z') || this.contactItems.contacts[x].name.startsWith('z')) {
            
            this.zContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('X') || this.contactItems.contacts[x].name.startsWith('x')) {
            
            this.xContacts.push(this.contactItems.contacts[x]);
          }
          else if (this.contactItems.contacts[x].name.startsWith('Y') || this.contactItems.contacts[x].name.startsWith('y')) {
            
            this.yContacts.push(this.contactItems.contacts[x]);
          }
  
        }

    });
  }
  else{
   
      for (let x = 0; x < this.contactItems.contacts.length; x++) {

        if (this.contactItems.contacts[x].name.startsWith('A') || this.contactItems.contacts[x].name.startsWith('a')) {
          
          this.aContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('B') || this.contactItems.contacts[x].name.startsWith('b')) {
                    
          this.bContacts.push(this.contactItems.contacts[x]);
        }

        else if (this.contactItems.contacts[x].name.startsWith('C') || this.contactItems.contacts[x].name.startsWith('c')) {
                    
          this.cContacts.push(this.contactItems.contacts[x]);
        }

        else if (this.contactItems.contacts[x].name.startsWith('D') || this.contactItems.contacts[x].name.startsWith('d')) {
                    
          this.dContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('E') || this.contactItems.contacts[x].name.startsWith('e')) {
          
          this.eContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('F') || this.contactItems.contacts[x].name.startsWith('f')) {
          
          this.fContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('G') || this.contactItems.contacts[x].name.startsWith('g')) {
          
          this.gContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('H') || this.contactItems.contacts[x].name.startsWith('h')) {
          
          this.hContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('I') || this.contactItems.contacts[x].name.startsWith('i')) {
          
          this.iContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('J') || this.contactItems.contacts[x].name.startsWith('j')) {
          
          this.jContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('K') || this.contactItems.contacts[x].name.startsWith('k')) {
          
          this.kContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('L') || this.contactItems.contacts[x].name.startsWith('l')) {
          
          this.lContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('M') || this.contactItems.contacts[x].name.startsWith('m')) {
          
          this.mContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('N') || this.contactItems.contacts[x].name.startsWith('n')) {
          
          this.nContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('O') || this.contactItems.contacts[x].name.startsWith('o')) {
          
          this.oContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('P') || this.contactItems.contacts[x].name.startsWith('p')) {
          
          this.pContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('Q') || this.contactItems.contacts[x].name.startsWith('q')) {
          
          this.qContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('R') || this.contactItems.contacts[x].name.startsWith('r')) {
          
          this.rContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('S') || this.contactItems.contacts[x].name.startsWith('s')) {
          
          this.sContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('T') || this.contactItems.contacts[x].name.startsWith('t')) {
          
          this.tContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('U') || this.contactItems.contacts[x].name.startsWith('u')) {
          
          this.uContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('V') || this.contactItems.contacts[x].name.startsWith('v')) {
          
          this.vContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('W') || this.contactItems.contacts[x].name.startsWith('w')) {
          
          this.wContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('Z') || this.contactItems.contacts[x].name.startsWith('z')) {
          
          this.zContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('X') || this.contactItems.contacts[x].name.startsWith('x')) {
          
          this.xContacts.push(this.contactItems.contacts[x]);
        }
        else if (this.contactItems.contacts[x].name.startsWith('Y') || this.contactItems.contacts[x].name.startsWith('y')) {
          
          this.yContacts.push(this.contactItems.contacts[x]);
        }

      }
    
  }
  } 

  public onSearch(search: string) {
    this.searchContacts = [];
    this.recentContacts = [];
    this.aContacts = [];
    this.bContacts = [];
    this.cContacts = [];
    this.dContacts = [];
    this.eContacts = [];
    this.fContacts = [];
    this.gContacts = [];
    this.hContacts = [];
    this.iContacts = [];
    this.jContacts = [];
    this.kContacts = [];
    this.lContacts = [];
    this.mContacts = [];
    this.nContacts = [];
    this.oContacts = [];
    this.pContacts = [];
    this.qContacts = [];
    this.rContacts = [];
    this.sContacts = [];
    this.tContacts = [];
    this.uContacts = [];
    this.vContacts = [];
    this.wContacts = [];
    this.xContacts = [];
    this.yContacts = [];
    this.zContacts = [];
    if (search.length == undefined || search.length == 0) {
      this.message = false;
      this.contactItems.contacts = [];
      this.ngOnInit();
    }
    else if (search.length) {
      console.log(search.length);
      debugger;
      search = search.toLowerCase();
      for (let x = 0; x < this.contactItems.contacts.length; x++) {
        if (this.contactItems.contacts[x].name.toLowerCase().startsWith(search)) {
          this.searchContacts.push(this.contactItems.contacts[x]);
        }
      }
      if (this.searchContacts.length == 0) {
        this.message = true;
      }

    }

  }
}




