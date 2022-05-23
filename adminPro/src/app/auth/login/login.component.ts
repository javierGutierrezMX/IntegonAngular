import { Component, OnInit } from '@angular/core';
import { User } from 'src/User.model';
import { UserServicesService } from 'src/UserServices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email!: string;
  Password!: string;

  constructor(private usersServices: UserServicesService, private _router: Router) { }

  LogIn(){
    let band = this.PasswordIsValid();
    if(band){
      let userExist;
      let users: User [] = [];
      this.usersServices.getUsers().subscribe( data =>{
        users = data.map(a => a);
        let tempUser: User = {
          Name: '',
          Email: this.Email,
          Password : this.Password
        }
        userExist = users.find(u => u.Email == tempUser.Email && u.Password == tempUser.Password);
        if (typeof userExist === "undefined"){
          alert("El Usuario no existe o la contraseña es incorrecta!!!");
        }
        else{
          alert("Sesion iniciada!!");
          this.clean();
          this._router.navigate(['dashboard']);
        }

      });
    }
    else{
      alert("Los Passwords esta vacio!!!");
    }
  }

  GoToRegister(){
    this._router.navigate(['register']);
  }

  ngOnInit(): void {
  }
  clean(){
    this.Email = '';
    this.Password ='';
  }
  PasswordIsValid(): Boolean{
    return this.Password === "" ? false: true;
  }
}


