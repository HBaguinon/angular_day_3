import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';

export const colorNameAsyncValidator = (httpClient: HttpClient) => (c: AbstractControl) => {

  // return httpClient.get<string[]>('http://localhost:4250/colors?name=' + c.value)
  //   .pipe(map(colors => colors.length === 1 ? null : ({ colorName: true })));

  return httpClient.get<{ id: number, name: string }[]>('http://localhost:4250/colors?name=' + c.value)
    .pipe(map(colors => colors.length === 1 ? null : ({ colorName: true })));
};
