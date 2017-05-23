import { Component } from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import { HttpsService }  from './https.service'
import { Response } from '@angular/http';
import { Http } from '@angular/http' ;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
 

constructor (private http:Http, private popup:Popup,  private httpsService: HttpsService) { }

ClickButton () {

	this.popup.options= {
color: "red"

	}

	this.popup.show();
}

cityName ='';

searchGif() {
 this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=0ba5e82df49a15a79cec569618c56215&q=` + this.cityName)
.subscribe(
( response:Response)  =>  {
	const picture = response.json();
	console.log(picture);
	
}

	);

};


};

