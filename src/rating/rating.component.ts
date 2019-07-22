import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({

    selector: 'rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
})
export class RatingComponent
{
@Input() rating:number;
    startWidth:number;
    @Output() ratingClick:EventEmitter<string> = new EventEmitter<string>()

    ngOnChanges(): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        this.startWidth = this.rating*75/5;
    }

    onClick():void
    {
        this.ratingClick.emit(`The shop rating ${this.rating} is clicked`);
    }
}