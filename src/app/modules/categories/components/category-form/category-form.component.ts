import {Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoriesUiHelperService } from '../../services/categories-ui-helper.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesApiService} from '../../../../shared/services/api/categories-api.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})

export class CategoryFormComponent implements OnInit {
  categoryEditForm: FormGroup;
  categoryId: string;
  titleHeader: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesUIHelper: CategoriesUiHelperService,
    private categoriesApiService: CategoriesApiService
  ) {}

  ngOnInit(): void {
    this.categoryEditForm = this.categoriesUIHelper.getCategoryEditForm();

    this.categoryId = this.route.snapshot.paramMap.get('id');
    if (this.categoryId !== null) {
      this.titleHeader = 'Edit Category Page';
      this.categoriesApiService.getCategory(this.categoryId).subscribe(res => {
        this.categoryEditForm.setValue({
          name: res.name,
          description: res.description
        });
      });
    } else {
      this.titleHeader = 'Create Category Page';
    }
  }

  public submit = () => {
    const name = this.categoryEditForm.get('name').value;
    const description = this.categoryEditForm.get('description').value;

    if (this.categoryId) {
      this.categoriesApiService.updateCategory(this.categoryId, { name, description }).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    } else {
      this.categoriesApiService.createCategory({ name, description }).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    }
  }
}
