import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Nissan',
      model: 'Altima',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

    return car;
  }

  create(car: { brand: string; model: string }) {
    const newCar = { id: Date.now(), ...car };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: number, car: { brand: string; model: string }) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1)
      throw new NotFoundException(`Car with ID ${id} not found`);

    this.cars[index] = { ...this.cars[index], ...car };
    return this.cars[index];
  }

  partialUpdate(id: number, car: Partial<{ brand: string; model: string }>) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1)
      throw new NotFoundException(`Car with ID ${id} not found`);

    this.cars[index] = { ...this.cars[index], ...car };
    return this.cars[index];
  }

  delete(id: number) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1)
      throw new NotFoundException(`Car with ID ${id} not found`);

    const deletedCar = this.cars[index];
    this.cars.splice(index, 1);
    return deletedCar;
  }
}
