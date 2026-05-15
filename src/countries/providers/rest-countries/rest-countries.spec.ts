/// <reference types="jest" />
import { Test, TestingModule } from '@nestjs/testing';
import { RestCountries } from './rest-countries';

describe('RestCountries', () => {
  let provider: RestCountries;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestCountries],
    }).compile();

    provider = module.get<RestCountries>(RestCountries);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
