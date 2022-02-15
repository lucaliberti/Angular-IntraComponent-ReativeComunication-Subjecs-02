import { Component, OnInit , OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { MyserviceService } from './myservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  isActivated:boolean=false
  private mysubscription!:Subscription;

  constructor( private myserv:MyserviceService) { }

  ngOnInit(): void {
    // https://angular.io/api/core/EventEmitter
    this.mysubscription=this.myserv.activatedEmitter.subscribe( evnt_data => this.isActivated=evnt_data)
  }

  ngOnDestroy():void{
    this.mysubscription.unsubscribe()
    console.log("Unsubscribed")
  }
}
