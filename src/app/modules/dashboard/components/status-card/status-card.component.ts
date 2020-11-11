import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})

export class StatusCardComponent {
  @Input() title: string;
  @Input() value: number;
  @Input() icon: string;

  constructor() { }
}
