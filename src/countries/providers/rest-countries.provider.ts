import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RestCountriesProvider {
  constructor(private readonly httpService: HttpService) {}

  async getCountryByCode(code: string): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get(`https://restcountries.com/v3.1/alpha/${code}`),
    );

    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error('Country not found');
    }
  }
}
