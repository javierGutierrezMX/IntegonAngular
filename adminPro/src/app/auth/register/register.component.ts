import { Component, OnInit } from '@angular/core';
import { User } from 'src/User.model';
import { UserServicesService } from 'src/UserServices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Name!: string;
  Email!: string;
  ConfirmPassword!: string;
  Password!: string;

  constructor(private usersServices: UserServicesService, private _router: Router) { }

  AddUser(){
    let band = this.PasswordIsValid();
    if(band){
      let userExist = true;
      let emails: string [] = [];
      this.usersServices.getUsers().subscribe( data =>{
        emails = data.map(a => a.Email);
        userExist = emails.includes(this.Email);
        let tempUser: User = {
          Name: this.Name,
          Email: this.Email,
          Password : this.Password
        }
        if (!userExist){
          this.usersServices.postUser(tempUser).subscribe(user => {alert(`EL usuario ${user.Name} ha sido registrado!!`)});
          this.clean();
        }
        else{
          alert("El Usuario ya existe!!!");
        }

      });
    }
    else{
      alert("Los Passwords no coinciden!!!");
    }
  }

  ngOnInit(): void {
  }

  GoToLogin(){
    this._router.navigate(['login']);
  }

  clean(){
    this.Name = '';
    this.Email = '';
    this.Password ='';
    this.ConfirmPassword = '';
  }



PasswordIsValid(): Boolean{
    return this.Password === this.ConfirmPassword ? true: false;
  }
}
