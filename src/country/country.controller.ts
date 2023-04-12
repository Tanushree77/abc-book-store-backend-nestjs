/* eslint-disable prettier/prettier */
import { Controller, Get} from '@nestjs/common';
import { CountryService } from './country.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Country')
@Controller({
    path: "country",
    version: "1"
})
export class CountryController {
    constructor(private countryService: CountryService) { }
  @Get()
    async findAll() {
      const data = await this.countryService.getAllCountry();
      return {
        success: true,
        data: data,
        message: '',
      };
    }

}
