import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css']
})
export class MatematicoComponent implements OnInit {

  @Input() num1:number = 0;
  @Input() num2:number = 0;
  @Input() operacion:string = "";
  @Output() btnoperacion = new EventEmitter<number>();
  resultMatematico : number = 0;
  result: number = 0;
  constructor() { }

  setResult(num1:any, num2:any, op:string){
    this.num1 = parseInt(num1);
    this.num2 = parseInt(num2);
    this.operacion = op;
    this.operacionSelected()
    // this.btnoperacion.emit(this.result);
  }

   operacionSelected(): void{
    switch (this.operacion) {
      case '+':

         this.result = this.num1 + this.num2;
        break;
        case '-':
         this.result = this.num1 - this.num2;
        break;
        case '*':
         this.result = this.num1 * this.num2;
        break;
        case '/':
         this.result = this.num1 / this.num2;
        break;

      default:
        break;
    }
  }
  ngOnInit(): void {
  }

  getMatematico(){
    return this.result;
  }
  getresult(value : number){
    this.resultMatematico = value;
 }

}
