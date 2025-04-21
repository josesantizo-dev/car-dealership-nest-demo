import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOne(id);
  }

  @Post()
  createCar(@Body() car: { brand: string; model: string }) {
    return this.carsService.create(car);
  }

  @Put(':id')
  updateCar(
    @Param('id', ParseIntPipe) id: number,
    @Body() car: { brand: string; model: string },
  ) {
    return this.carsService.update(id, car);
  }

  @Patch(':id')
  partialUpdateCar(
    @Param('id', ParseIntPipe) id: number,
    @Body() car: Partial<{ brand: string; model: string }>,
  ) {
    return this.carsService.partialUpdate(id, car);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.delete(id);
  }
}
