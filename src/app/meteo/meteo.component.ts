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
      var i = 0;
      var jour_suivant = new Array();
      for(i=0;i<=4;i++){
        var lejour = "fcst_day_"+i;
        jour_suivant.push({"day_date":responsFormat[lejour]['date'],"day_long":responsFormat[lejour]['day_long'],"day_icon":responsFormat[lejour]['icon_big'],"day_tmax":responsFormat[lejour]['tmin'],"day_tmin":responsFormat[lejour]['tmax']});
      }
      console.log(jour_suivant);
    })
    .catch(err => {
        console.error(err);
    });

  }

}
