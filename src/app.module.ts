import * as path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherEntity } from './weather.entity';
@Module(
  
  {
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Dy123456',
        database: 'weather',
        entities: [path.join(__dirname, '**', '*.entity{.ts,.js}')],
        synchronize: true,
        logging: true
      }),
      TypeOrmModule.forFeature([WeatherEntity])
    ],
    controllers: [AppController],
    providers: [AppService],
  }
)
export class AppModule {}
