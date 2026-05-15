import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TravelPlan } from './entities/travel-plan.entity';
import { CreateTravelPlanDto } from './dto/create-travel-plan.dto';

import { CountriesService } from '../countries/countries.service';

@Injectable()
export class TravelPlansService {
  constructor(
    @InjectRepository(TravelPlan)
    private readonly travelPlanRepository: Repository<TravelPlan>,

    private readonly countriesService: CountriesService,
  ) {}

  async create(dto: CreateTravelPlanDto): Promise<TravelPlan> {
    await this.countriesService.findOrCreateCountry(dto.destinationCountryCode);

    const travelPlan = this.travelPlanRepository.create(dto);

    return await this.travelPlanRepository.save(travelPlan);
  }

  async findAll(): Promise<TravelPlan[]> {
    return await this.travelPlanRepository.find();
  }

  async findOne(id: number): Promise<TravelPlan> {
    const travelPlan = await this.travelPlanRepository.findOne({
      where: { id },
    });

    if (!travelPlan) {
      throw new NotFoundException('Travel plan not found');
    }

    return travelPlan;
  }

  async remove(id: number): Promise<void> {
    const travelPlan = await this.findOne(id);

    await this.travelPlanRepository.remove(travelPlan);
  }
}
