import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { PartialUpdateCarDto } from './dto/partialUpdate-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }

  @Post()
  createCar(@Body() car: CreateCarDto) {
    return this.carsService.create(car);
  }

  @Patch(':id')
  partialUpdateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() car: PartialUpdateCarDto,
  ) {
    return this.carsService.partialUpdate(id, car);
  }

  @Put(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() car: UpdateCarDto,
  ) {
    return this.carsService.update(id, car);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
