import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateExpenseDto {
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsPositive()
  amount!: number;

  @IsNotEmpty()
  category!: string;
}
