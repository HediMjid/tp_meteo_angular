import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo-suivant',
  templateUrl: './meteo-suivant.component.html',
  styleUrls: ['./meteo-suivant.component.css']
})
export class MeteoSuivantComponent implements OnInit {
  @Input() data: any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
