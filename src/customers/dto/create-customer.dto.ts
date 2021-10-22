import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsString()
  @ApiProperty({ example: 'John', description: 'The name of the Customer' })
  name: string

  @IsString()
  @ApiProperty({ example: 'London', description: 'The address of the Customer' })
  address: string
}
