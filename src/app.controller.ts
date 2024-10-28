import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('loginData')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('saveLogin')
  async getData(@Query('name') name: string, @Query('Surname') surname: string)
  {
    if(name == null || surname == null)
    { 
      return {
      "code":"400",
      "message":"name or surname is not null"
            }
    }
    else 
    {
        var responce = this.appService.saveUsers(name,surname)
        return responce
    }
  }

  @Get('getdata') 
  async getData2(
    /*@Query('country') country : string*/
  ){
var response =this.appService.getUsers(
 /* country*/
  )
  return response
}
  
  }
