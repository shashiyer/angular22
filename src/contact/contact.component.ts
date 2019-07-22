import { User } from './contact';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector:'contact',
    templateUrl:'./contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{
    
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