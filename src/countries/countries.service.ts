import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Country } from './entities/country';
import { RestCountriesProvider } from './providers/rest-countries.provider';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,

    private readonly restCountriesProvider: RestCountriesProvider,
  ) {}

  async findOrCreateCountry(code: string): Promise<Country> {
    let country = await this.countryRepository.findOne({
      where: {
        alpha3Code: code,
      },
    });

    if (country) {
      return country;
    }

    const apiCountry = await this.restCountriesProvider.getCountryByCode(code);

    country = this.countryRepository.create({
      alpha3Code: apiCountry.cca3,
      name: apiCountry.name.common,
      region: apiCountry.region,
      capital: apiCountry.capital?.[0] || 'Unknown',
      population: apiCountry.population,
      flagUrl: apiCountry.flags.png,
    });

    return await this.countryRepository.save(country);
  }
}
