import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty({ example: 'John', description: 'The name of the Customer' })
  name: string;

  @ApiProperty({ example: 'London', description: 'The address of the Customer' })
  address: string;

  @ApiProperty({ example: '617276c3dfdf6dd54ce29a6c', description: 'The id of the Customer' })
  _id: string;

  @ApiProperty({ example: 0, description: 'Version' })
  __v: number;
}
