import { Observable, of } from 'rxjs'
import { IWeatherSevice } from './weather.service'
import { ICurrentWeather } from '../interfaces'


export class WeatherServiceFake implements IWeatherSevice {
    private fakeWeather: ICurrentWeather  = {
        city:'Bursa',
        country: 'TR',
        date: 14258957,
        Image: '',
        temperature:280.32,
        description: 'light intensity drizzle'
    }
    public getCurrentWeather (city:string, country:string) :
    Observable<ICurrentWeather> {
        return of (this.fakeWeather)
    }
}
