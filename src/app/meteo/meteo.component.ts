import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})

export class MeteoComponent implements OnInit {
  dataMeteoResp  :any;
  
  constructor() { }

  addItem(ville: string) {
    //this.items.push(newItem);
    //console.log(ville);
    this.getInfoVille(ville);
  }

  getInfoVille(ville: string){
    fetch("https://www.prevision-meteo.ch/services/json/"+ville)
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then(responsFormat => {
      // on recreer nous meme un tableau avec les infos necessaires pour plus tard
      //initiation des variables
      // i pour la boucle
      var i = 0;
      // declaration d'un tableau pour lui push les infos necessaires aux jours suivants
      var jour_suivant = new Array();
      // declaration et remplissage du tableau avec les infos de la journée
      var jour_j = {"day_city":responsFormat['city_info']['name'],"day_date":responsFormat['current_condition']['date'],"day_hour":responsFormat['current_condition']['hour'],"day_icon":responsFormat['current_condition']['icon_big'],"day_tmp":responsFormat['current_condition']['tmp']};
      //this.dataMeteoResp=responsFormat;
      //console.log(responsFormat);
      
      // boucle pour rechercher les infos des jours suivants, qu'on push dans notre tableau jour_suivants
      for(i=0;i<=4;i++){
        var lejour = "fcst_day_"+i;
        jour_suivant.push({"day_date":responsFormat[lejour]['date'],"day_long":responsFormat[lejour]['day_long'],"day_icon":responsFormat[lejour]['icon_big'],"day_tmax":responsFormat[lejour]['tmax'],"day_tmin":responsFormat[lejour]['tmin']});
      }

      // on ajoute nos 2 tableau dans un seul, que l'on passe dans dataMeteoResp
      this.dataMeteoResp={"jour_j":jour_j,"jour_suivants":jour_suivant};
      console.log(this.dataMeteoResp);
    })
    .catch(err => {
        console.error(err);
    });
  }

  ngOnInit(): void {
    this.getInfoVille('Paris');
  }

}
