import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string = ""

  @Output() searchEvent = new EventEmitter()
  search() {
    this.searchEvent.emit(this.searchText)
  }
  reset() {
    this.searchText = "";
    this.searchEvent.emit(this.searchText)
  }

}
