import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  cuenta : number = 0;

  sumar(){
    this.cuenta =+ this.cuenta +1;
  }
  restar(){

    this.cuenta =+ this.cuenta > 1 ? this.cuenta -1 : 1;
  }
  ngOnInit(): void {
  }

}
