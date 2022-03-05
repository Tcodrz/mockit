import { Component, Input, OnInit } from '@angular/core';
import { SchemaElement, SchemaElementType } from 'src/app/core/models/schema-element.interface';

@Component({
  selector: 'app-field-row',
  templateUrl: './field-row.component.html',
  styleUrls: ['./field-row.component.scss']
})
export class FieldRowComponent implements OnInit {
  @Input() element: SchemaElement = {} as SchemaElement;
  schemaElementTypes: SchemaElementType[] = ['string', 'boolean', 'number', 'id'];
  constructor() { }

  ngOnInit(): void {
  }

}
