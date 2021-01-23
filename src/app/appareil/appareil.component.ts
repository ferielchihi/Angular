import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() AppareilName : any;
  @Input() AppareilStatus : any;
  @Input() AppareilIndex  : any;
  public color = '';
  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    console.log(this.AppareilStatus)
  }
  getStatus(){
    return this.AppareilStatus;
  }
  getColor(){
    if (this.AppareilStatus === 'Allumer'){
      return 'green';
    } else {
      return 'red';
    }
  }
  onSwitchOn(){
    this.appareilService.switchOnOne(this.AppareilIndex);
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.AppareilIndex);
  }
}
