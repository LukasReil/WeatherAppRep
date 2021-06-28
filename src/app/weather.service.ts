import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData() {
    this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?q=Weiden,de,de&appid=9439387794845f85314d54988a193026&lang=de&units=metric'
    );
  }
}
