import { User } from './register';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector:'user-app',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']

})
export class RegisterComponent implements OnInit{
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
     user = new User();

save(userForm:NgForm){
console.log(userForm.form);
console.log('Saved data ' + JSON.stringify(userForm.value) )
    
}

}