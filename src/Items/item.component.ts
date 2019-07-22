import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'items',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemsComponent
{
    shopRating1:number = 5;
    shopRating2:number = 5;
    shopRating3:number = 5;
    shopRating4:number = 5;
    shopRating5:number = 5;
}