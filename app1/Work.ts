class CuentaBancaria {
    noCuenta:number;
    saldo: number;

    constructor (noCuenta:number, saldo:number){
        this.noCuenta= noCuenta;
        this.saldo= saldo;
    }
}

class TarjetaDeCredito extends CuentaBancaria{
    tasaInteres:number;

    constructor(noCuenta:number, saldo:number,tasaInteres:number){
       super(noCuenta, saldo);
        this.tasaInteres= tasaInteres;
    }
}

class Pagare extends CuentaBancaria{
    plazo: number;
    constructor(noCuenta:number, saldo:number,plazo:number){
        super(noCuenta, saldo);
        this.plazo = plazo;
    }
}

let arreglo:any[];
function Seed(){
    for (let index = 0; index < 10; index++) {
      let temp_tdc:TarjetaDeCredito = new TarjetaDeCredito(getRandomInt(999,9999),getRandomInt(0,10000),getRandomInt(12,75));
      let temp_pagare:Pagare = new Pagare(getRandomInt(999,9999),getRandomInt(0,10000),getRandomInt(1,12));
      arreglo.push(temp_tdc);
      arreglo.push(temp_pagare);
    }
}

function SeeCounts<T>(arr: T[]){
    arreglo.forEach(c =>{
      console.log("Tarjetas de credito: ");
      if( c as TarjetaDeCredito){
        console.log(c.noCuenta + " " + c.saldo +" "+ c.tasaInteres)
      }
      if( c as Pagare){
        console.log(c.noCuenta + " " + c.saldo +" "+ c.plazo)
      }
    })
}

function getRandomInt(min:number, max:number) : number{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
