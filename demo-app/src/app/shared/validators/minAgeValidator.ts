import { AbstractControl } from '@angular/forms';

export const minAgeValidator = (minAge: number) => (c: AbstractControl) => {

  if (c.value === null || c.value === undefined || String(c.value).length === 0) {
    return null;
  } // note that c.value == null to include undefined.
    // otherwise it would look like this:
    // c.value === null || c.value === undefined

  if (Number(c.value) < minAge) {
    return { minage: true };
  }

  return null;

};
