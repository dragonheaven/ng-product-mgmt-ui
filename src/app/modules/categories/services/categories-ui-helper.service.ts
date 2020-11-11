import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class CategoriesUiHelperService {
  constructor() { }

  public getCategoryEditForm = (): FormGroup => {
    return new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }
}
