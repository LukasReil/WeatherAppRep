import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { WeatherService } from './weather.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(weatherservice:WeatherService) {}
}
