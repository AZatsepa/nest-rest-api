import {
  Controller, Get, Post, Put, Delete,
  Param, Body, Redirect, HttpCode, HttpStatus, Header,
  Req, Res
 } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response, Request } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {

  }

  // @Get()
  // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Bye');
  //   return 'getAll()';
  // }

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): string {
  return `Updated by ID: ${id} - Title: ${updateProductDto.title}, Price: ${updateProductDto.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return 'Deleted: ' + id;
  }
}
