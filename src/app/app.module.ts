import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { Http,HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';



import { AppComponent } from './app.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';
import { ContactlistcomponentComponent } from './contactlistcomponent/contactlistcomponent.component';
import { ContactitemComponent } from './contactlistcomponent/contactitem/contactitem.component';
import { ContactsService } from './services/contacts.service';
import { AddcontactComponent } from './addcontact/addcontact.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchcomponentComponent,
    ContactlistcomponentComponent,
    ContactitemComponent,
    AddcontactComponent
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path:'add',component:AddcontactComponent},
       {path:'' ,component:ContactlistcomponentComponent}
    ]),
    HttpModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
