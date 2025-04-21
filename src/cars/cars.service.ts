import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Nissan',
      model: 'Altima',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

    return car;
  }

  create(car: { brand: string; model: string }) {
    const newCar = { id: uuid(), ...car };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, car: { brand: string; model: string }) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1)
      throw new NotFoundException(`Car with ID ${id} not found`);

    this.cars[index] = { ...this.cars[index], ...car };
    return this.cars[index];
  }

  partialUpdate(id: string, car: Partial<{ brand: string; model: string }>) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1)
      throw new NotFoundException(`Car with ID ${id} not found`);

    this.cars[index] = { ...this.cars[index], ...car };
    return this.cars[index];
  }

  delete(id: string) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1)
      throw new NotFoundException(`Car with ID ${id} not found`);

    const deletedCar = this.cars[index];
    this.cars.splice(index, 1);
    return deletedCar;
  }
}
