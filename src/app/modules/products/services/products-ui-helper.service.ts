import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class ProductsUiHelperService {
  constructor() { }

  public getProductEditForm = (): FormGroup => {
    return new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(0),
      quantity: new FormControl(0),
      categories: new FormControl([]),
    });
  }
}
