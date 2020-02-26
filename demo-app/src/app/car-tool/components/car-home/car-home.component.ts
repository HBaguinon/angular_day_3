import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [];

  editCarId = -1;

  sortColName = '';

  updateCars = {
    next: cars => {
      this.cars = cars;
      this.editCarId = -1;
    },
    error: err => {
      console.log(err);
    },
  };

  constructor(public carsSvc: CarsService) { }

  ngOnInit(): void {
    // this.carsSvc.all().then(cars => {
    //   this.cars = cars;
    // });

    // this.carsSvc.all().subscribe(cars => {
    //   this.cars = cars;
    // });

    this.refreshCars();
  }

  doSortCars(sortColName: string) {
    this.sortColName = sortColName;
    this.refreshCars();
  }

  oldRefreshCars() {
    // return this.carsSvc.all(this.sortColName).then(cars => {
    //   this.cars = cars;
    // });

    // return this.carsSvc.all(this.sortColName).subscribe(cars => {
    //   this.cars = cars;
    // });

    return this.carsSvc.all(this.sortColName);
  }

  refreshCars(o: Observable<any> = null) {
    (!o ? of([]) : o).pipe(switchMap(() => this.carsSvc.all(this.sortColName)))
      .subscribe(this.updateCars);
  }

  doAppendCar(car: Car) {
    // this.carsSvc
    //   .append(car)
    //   .subscribe(() => this.refreshCars());
    // this.editCarId = -1;

    // this.carsSvc
    //   .append(car)
    //   .pipe(
    //     switchMap(() => this.refreshCars())
    //   )
    //   .subscribe({
    //     next: cars => {
    //       this.cars = cars;
    //       this.editCarId = -1;
    //     },
    //     error: err => {
    //       console.log(err);
    //     },
    //   });
    this.refreshCars(this.carsSvc.append(car));
  }

  doRemoveCar(carId: number) {
    // this.carsSvc
    //   .remove(carId)
    //   .subscribe(() => this.refreshCars());
    // this.editCarId = -1;

    // this.carsSvc
    //   .remove(carId)
    //   .pipe(
    //     switchMap(() => this.refreshCars())
    //   )
    //   .subscribe({
    //     next: cars => {
    //       this.cars = cars;
    //       this.editCarId = -1;
    //     },
    //     error: err => {
    //       console.log(err);
    //     },
    //   });

      this.refreshCars(this.carsSvc.remove(carId));
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doReplaceCar(car: Car) {
    // this.carsSvc
    //   .replace(car)
    //   .subscribe(() => this.refreshCars());
    // this.editCarId = -1;

    // this.carsSvc
    //   .replace(car)
    //   .pipe(
    //     switchMap(() => this.refreshCars())
    //   )
    //   .subscribe({
    //     next: cars => {
    //       this.cars = cars;
    //       this.editCarId = -1;
    //     },
    //     error: err => {
    //       console.log(err);
    //     },
    //   });

    this.refreshCars(this.carsSvc.replace(car));
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
