import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {

  @Input() title = 'Success';
  @Input() message = '[Item] was saved.';
  @Input() errorType = 'delete';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
