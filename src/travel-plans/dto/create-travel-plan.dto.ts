import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTravelPlanDto {
  @IsNotEmpty()
  title!: string;

  @IsDateString()
  startDate!: string;

  @IsDateString()
  endDate!: string;

  @IsNotEmpty()
  destinationCountryCode!: string;

  @IsNumber()
  userId!: number;
}
