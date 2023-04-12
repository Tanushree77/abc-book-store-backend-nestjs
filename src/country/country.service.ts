/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(Country) private readonly countryRepository: Repository<Country>
    ) { }

    async getAllCountry(): Promise<Country[]> {
        const result = await this.countryRepository.find();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
