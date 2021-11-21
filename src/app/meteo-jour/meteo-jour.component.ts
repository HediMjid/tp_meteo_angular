import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo-jour',
  templateUrl: './meteo-jour.component.html',
  styleUrls: ['./meteo-jour.component.css']
})
export class MeteoJourComponent implements OnInit {
  @Input() data: any | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
