import { Component } from '@angular/core';
import {Popup} from 'ng2-opd-popup';






@Component({
  selector: 'app-root',
  template: `<h1>{{students}}</h1>
  <p [ngClass]="{rPass: myPass === 'dotsway'}">Enter password:</p>
  <input type="password" [(ngModel)]="myPass">
<ul *ngIf="myPass === 'dotsway' ">
<li *ngFor="let student of students">
Student: {{student}}
</li>
</ul>
<h1 [ngStyle]="{color: myPass === 'dotsway' ? 'green' : 'red'}"> Online</h1>

<popup>
    Add your custom html elements here
</popup>

<button (click)="ClickButton()">Click</button>


  `,
  styles: [`

.rPass{

color: green;

}

  `]
})
export class AppComponent {
  title = 'app works!';

students=['Dina','Shikaz','Dana','Sri'];


 constructor(private popup:Popup) { }
 
 ClickButton(){
    
this.popup.options = {
    header: "Your custom header",
    color: "#5cb85c", // red, blue.... 
    widthProsentage: 40, // The with of the popou measured by browser width 
    animationDuration: 10, // in seconds, 0 = no animation 
    showButtons: true, // You can hide this in case you want to use custom buttons 
    confirmBtnContent: "OK", // The text on your confirm button 
    cancleBtnContent: "Cancel", // the text on your cancel button 
    confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
    cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
    animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
};

    this.popup.show();
  }



}
