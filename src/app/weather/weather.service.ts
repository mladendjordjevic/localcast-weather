import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ICurrentWeather } from '../interfaces';
import { map } from 'rxjs/Operators';



 interface ICurrentWetherData {
  weather: [{
    description: string,
    icon: string
  }],
  main: {
    temp: number
  },
  sys: {
    country: string
  },
  dt: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherSevice {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather (city: string, country: string):Observable<ICurrentWeather> {
    return this.httpClient.get<ICurrentWetherData>(
      `http://api.openweathermap.org/data/2.5/weather?,q=${city},${country}&appid=${environment.appId}`
    ).pipe(
      map(data =>
        this.transformToICurentWeather(data)
        )
    )
  
     }
     private  transformToICurentWeather( data:ICurrentWetherData ) : ICurrentWeather {
      return {
        city: data.name,
        country: data.sys.country,
        date: data.dt *1000,
        Image:
        `http://openweathermap.org/img/w/${data.weather [0].icon}.ping`,
        temperature: this.convertKelvinToFahrenheit (data.main.temp),
        description: data.weather[0].description
   }
  
   }
   private convertKelvinToFahrenheit (kelvin: number) :number {
    return kelvin * 9 / 5 -459.67
  }
}

export interface IWeatherSevice {
  getCurrentWeather(city:string, country: string) :
  Observable<ICurrentWeather>
}
