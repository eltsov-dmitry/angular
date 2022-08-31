import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-fields',
  templateUrl: './error-fields.component.html',
  styleUrls: ['./error-fields.component.scss'],
})
export class ErrorFieldsComponent implements OnInit {
  @Input() public inputField: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
