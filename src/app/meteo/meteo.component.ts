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

    fetch("https://www.prevision-meteo.ch/services/json/Paris")
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then(responsFormat => {
      var i = 0;
      var jour_suivant = new Array();
      var jour_j = new Array();
      jour_j.push({"day_city":responsFormat['city_info']['name'],"day_date":responsFormat['current_condition']['date'],"day_hour":responsFormat['current_condition']['hour'],"day_icon":responsFormat['current_condition']['icon_big'],"day_tmp":responsFormat['current_condition']['tmp']});
      //this.dataMeteoResp=responsFormat;
      console.log(responsFormat);
      for(i=0;i<=4;i++){
        var lejour = "fcst_day_"+i;
        jour_suivant.push({"day_date":responsFormat[lejour]['date'],"day_long":responsFormat[lejour]['day_long'],"day_icon":responsFormat[lejour]['icon_big'],"day_tmax":responsFormat[lejour]['tmax'],"day_tmin":responsFormat[lejour]['tmin']});
      }
      //console.log(jour_suivant);
      this.dataMeteoResp=[jour_j,jour_suivant];
      console.log(this.dataMeteoResp);
    })
    .catch(err => {
        console.error(err);
    });

  }

}
