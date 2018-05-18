import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { IContact } from '../interfaces/IContact';


@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrls: ['./searchcomponent.component.css']
})
export class SearchcomponentComponent implements OnInit {
searchTxt:string="";
@Output() search=new EventEmitter<string>();

  ngOnInit() {
  }
 Search(){
console.log(this.searchTxt);
 this.search.emit(this.searchTxt)
 }
}
