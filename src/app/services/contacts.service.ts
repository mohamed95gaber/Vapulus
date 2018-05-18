import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/IContact';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { error } from 'util';


@Injectable()
export class ContactsService {
  handleError: any;
  public contacts:IContact[]=[];
  constructor(private http: Http) {

  }

  public getRecentContacts(): Observable<any> {
    return this.http.get("../../assets/Data/recent-contact.json")
      .map((res: any) => res.json())
      .catch(this.handleError);

  }

  public getContacts(): Observable<any> {
    return this.http.get("../../assets/Data/contacts.json")
      .map((res: any) => res.json())
      .catch(this.handleError);

  }

}
