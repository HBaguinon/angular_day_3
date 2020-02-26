import { AbstractControl } from '@angular/forms';

export const phoneOrEmailValidator = (c: AbstractControl) => {

  if (String(c.get('email').value).length === 0 && String(c.get('phone').value).length === 0) {
    return {
      phoneOrEmailRequired: true,
    };
  }

  return null;
};
