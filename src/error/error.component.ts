import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'error',
    templateUrl: './error.component.html'
})

export class ErrorComponent
{
constructor(private loc:Location)
{}
    goBack()
    {
        this.loc.back();
        console.log('goBack()...');
    }

}
