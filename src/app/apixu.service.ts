import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {
    
   }

    getWeather(location){
      return this.http.get(
          'http://api.weatherstack.com/current?access_key=a9769b0e20f149166add996291ae3a23&query=' + location //apiye istek
      );
  }
}
