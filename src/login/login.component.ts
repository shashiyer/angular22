import { User } from './login';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector:'login',
    templateUrl:'./login.component.html'
})
export class LoginComponent implements OnInit{
    
    
    ngOnInit(): void {
       
    }
 
 
 
    user = new User();

constructor() {
   
    
}


save(userForm:NgForm){
console.log(userForm.form);
console.log('Saved data ' +userForm.value );


    
}

}