import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/IContact';

@Injectable()
export class ContactsService {

  constructor() {

  }

  public recentcontacts: IContact[] =
    [
      {
        imgUrl: "../assets/images/r1.jpg",
        name: "Godzila",
        phone: 123456789
      },
      {
        imgUrl: "../assets/images/r2.jpg",
        name: "Hulk",
        phone: 555555555
      },
      {
        imgUrl: "../assets/images/r1.jpg",
        name: "Iron Man",
        phone: 888992552
      },


    ];
  public contactsA: IContact[] =
    [
       {
        imgUrl: "../assets/images/r1.jpg",
        name: "Aman",
        phone: 888992552
      }, {
        imgUrl: "../assets/images/r1.jpg",
        name: "Ahmed",
        phone: 888992552
      }, {
        imgUrl: "../assets/images/r1.jpg",
        name: "Amr",
        phone: 888992552
      }, {
        imgUrl: "../assets/images/r1.jpg",
        name: "Ali",
        phone: 888992552
      }, {
        imgUrl: "../assets/images/r1.jpg",
        name: "Amir",
        phone: 888992552
      }, {
        imgUrl: "../assets/images/r1.jpg",
        name: "Assma",
        phone: 888992552
      },


    ];
    public contactsB: IContact[] =
    [
      {
        imgUrl: "../assets/images/r1.jpg",
        name: "Bassma",
        phone: 123456789
      },
      {
        imgUrl: "../assets/images/r1.jpg",
        name: "Batol",
        phone: 123456789
      },
      {
        imgUrl: "../assets/images/r1.jpg",
        name: "Bilal",
        phone: 123456789
      },
      {
        imgUrl: "../assets/images/r1.jpg",
        name: "Bond3",
        phone: 123456789
      },


    ];
    public contactsC: IContact[] =
    [
       {
        imgUrl: "../assets/images/r1.jpg",
        name: "cinay",
        phone: 888992552
      }, {
        imgUrl: "../assets/images/r1.jpg",
        name: "Comaro",
        phone: 888992552
      }, {
        imgUrl: "../assets/images/r1.jpg",
        name: "CoCo",
        phone: 888992552
      }


    ];






  public get getRecentContacts(): IContact[] {
    return this.recentcontacts;
  }
  public get getAContacts(): IContact[] {
    return this.contactsA;
  }
  public get getBContacts(): IContact[] {
    return this.contactsB;
  }
  public get getCContacts(): IContact[] {
    return this.contactsC;
  }






}
