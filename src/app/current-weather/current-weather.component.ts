import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces'


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor() {
    this.current = {
      city: 'Nis',
      country: 'Srbija',
      date: new Date(),
      Image: 'http://cdn1.shopmania.biz/files/s4/773291108/p/l/8/slike-na-platnu-vuk-apstraktno-nina085-k~4618.jpg',
      temperature: 72,
      description: 'suny'
    }as ICurrentWeather
   }

  ngOnInit() {
  }

}
