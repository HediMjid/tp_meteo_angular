import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  dataMeteoResp  :any;
  
  constructor() { }

  ngOnInit(): void {

    fetch("https://www.prevision-meteo.ch/services/json/Lyon")
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then(responsFormat => {
      this.dataMeteoResp=responsFormat;
      console.log(this.dataMeteoResp);
    })
    .catch(err => {
        console.error(err);
    });

  }

}
