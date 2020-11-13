import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from './apixu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherConditions';
  weatherData;

  public weatherSearchForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  send(formValues){
    this.apixuService.getWeather(formValues.location)
                     .subscribe(data => { 
                       this.weatherData = data 
                       console.log(this.weatherData);
                      });

  }

  
}

