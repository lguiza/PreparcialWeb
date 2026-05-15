import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TravelPlan {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;

  @Column()
  destinationCountryCode!: string;

  @Column()
  userId!: number;

  @Column('simple-json', { nullable: true })
  expenses!: {
    description: string;
    amount: number;
    category: string;
  }[];
}
