import { Injectable } from '@angular/core';
import { Http } from '@angular/http' ;

@Injectable()
export class HttpsService {

  constructor(private http: Http) { }

fetchPicture (cityName) {

 return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=0ba5e82df49a15a79cec569618c56215&q=` + cityName)

}

}
