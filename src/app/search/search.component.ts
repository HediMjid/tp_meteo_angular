import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() newVilleEvent = new EventEmitter<string>();

  selectNewVille(value: string) {
    this.newVilleEvent.emit(value);
    //console.log(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
