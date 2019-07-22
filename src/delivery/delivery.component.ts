import { Component, OnInit } from '@angular/core';
import { User } from './delivery';
import { NgForm } from "@angular/forms";

@Component({
    selector: 'delivery',
    templateUrl: './delivery.component.html',
//    styleUrls: '[./deliver]'
})

    export class DeliveryComponent implements OnInit
    {
    
        ngOnInit(): void {
            throw new Error("Method not implemented.");
        }
         user = new User();
    
    save(userForm:NgForm){
    console.log(userForm.form);
    console.log('Saved data ' + JSON.stringify(userForm.value) )
}
    }