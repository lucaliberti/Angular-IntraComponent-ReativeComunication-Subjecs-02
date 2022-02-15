import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.css']
})
export class Component01Component implements OnInit {

  constructor( private myserv:MyserviceService) { }
  ngOnInit(): void {}

  
  onActivate(){
    this.myserv.activatedEmitter.next(true)
    console.log("Event fired")
  }
  
}
