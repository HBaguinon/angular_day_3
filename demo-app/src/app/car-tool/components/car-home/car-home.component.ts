import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [];

  editCarId = -1;

  sortColName = '';

  constructor(public carsSvc: CarsService) { }

  ngOnInit(): void {
    // this.carsSvc.all().then(cars => {
    //   this.cars = cars;
    // });
    this.carsSvc.all().subscribe(cars => {
      this.cars = cars;
    });
  }

  doSortCars(sortColName: string) {
    this.sortColName = sortColName;
    this.refreshCars();
  }

  refreshCars() {
    // return this.carsSvc.all(this.sortColName).then(cars => {
    //   this.cars = cars;
    // });
    return this.carsSvc.all(this.sortColName).subscribe(cars => {
      this.cars = cars;
    });
  }

  doAppendCar(car: Car) {
    this.carsSvc
      .append(car)
      .subscribe(() => this.refreshCars());
    this.editCarId = -1;
  }

  doRemoveCar(carId: number) {
    this.carsSvc
      .remove(carId)
      .subscribe(() => this.refreshCars());
    this.editCarId = -1;
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doReplaceCar(car: Car) {
    this.carsSvc
      .replace(car)
      .subscribe(() => this.refreshCars());
    this.editCarId = -1;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
