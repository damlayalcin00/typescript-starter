import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WeatherEntity } from './weather.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
constructor(@InjectRepository(WeatherEntity)
private readonly weatherRepository : Repository <WeatherEntity>,
){}

async saveUsers(name:string,surname:string)
{
  var weatherEntity = new WeatherEntity()
  weatherEntity.name = name
  weatherEntity.surname = surname
  console.log(weatherEntity)
  var responce = this.weatherRepository.save(weatherEntity)
  return responce
}

async getUsers(){
  return await this.weatherRepository
  .createQueryBuilder()
  /*.getMany()*/
  .getOne()
}}
