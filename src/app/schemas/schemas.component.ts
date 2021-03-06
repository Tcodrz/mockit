import { Component, OnInit } from '@angular/core';
import { ISchema } from '../core/models/schema.interface';

@Component({
  selector: 'app-schemas',
  templateUrl: './schemas.component.html',
  styleUrls: ['./schemas.component.scss']
})
export class SchemasComponent implements OnInit {
  schemas: ISchema[] = [
    {
      id: 1,
      name: 'Student',
      elements: [
        { type: 'id', fieldName: 'id', },
        { type: 'string', fieldName: 'name' },
        { type: 'number', fieldName: 'phone' },
      ]
    },
    {
      id: 2,
      name: 'Teacher',
      elements: [
        { type: 'id', fieldName: 'id', },
        { type: 'string', fieldName: 'name' },
        { type: 'number', fieldName: 'phone' },
      ]
    }
  ]
  constructor() { }
  ngOnInit(): void { }
}
