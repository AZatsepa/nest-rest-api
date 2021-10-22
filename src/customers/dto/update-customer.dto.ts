import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @IsString()
  @ApiProperty({ example: 'John', description: 'The name of the Customer' })
  readonly name: string

  @IsString()
  @ApiProperty({ example: 'London', description: 'The address of the Customer' })
  readonly address: string
}
