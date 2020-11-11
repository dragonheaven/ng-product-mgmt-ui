import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

import { ErrorModalComponent } from '../components/modals/error-modal/error-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DisplayModalService {

  constructor(private modalService: NgbModal) {}

  public showErrorModal = (title: string, errorResponse: HttpErrorResponse) => {
    const modalRef = this.modalService.open(ErrorModalComponent);
    modalRef.componentInstance.title = title;

    let message;
    if (errorResponse.status >= 500) {
      // some of the errors returned by the APIs for 5xx are not user-friendly, so sticking with generic here
      message = errorResponse.statusText;
    } else if (errorResponse.error.message) {
      // some 4xx are worth showing to the user, for example 422 Unprocessable Entity with duplication text coming from the API
      message = errorResponse.error.message;
    } else if (errorResponse.error.detail) {
      // dyn groups have a different structure with no "message" prop but with "detail" that contains a user-friendly error reason
      message = errorResponse.error.detail;
    } else if (errorResponse.status === 403) {
      message = 'Your session expired, please log in.';
    } else {
      message = errorResponse.message;
    }
    modalRef.componentInstance.message = message;
  }
}
