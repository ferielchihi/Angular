import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  currentDate = new Date();
  title = 'first-projet-angular';
  LastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      console.log(date.getDay(),'ffff')
      setTimeout(() => {
        resolve(date.getDay());  
      }, 2000); 
      
    }
  );
  
  Appareils: any;
  isAuthor = false ;
  appareilOne ='tv'
  

  constructor(private appareilService: AppareilService){
    setTimeout(() => {
      return this.isAuthor = true;
    }, 4000);
  }
  OnAllume(){
    this.appareilService.switchOnAll();
  }
  OffAllume(){
    this.appareilService.switchOffAll();
  }
  ngOnInit(){
    this.Appareils = this.appareilService.Appareils;
    console.log(this.LastUpdate)
  }

}
