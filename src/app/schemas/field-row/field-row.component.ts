import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SchemaElement, SchemaElementType } from 'src/app/core/models/schema-element.interface';

@Component({
  selector: 'app-field-row',
  templateUrl: './field-row.component.html',
  styleUrls: ['./field-row.component.scss']
})
export class FieldRowComponent implements OnInit {
  @Input() element: SchemaElement = {} as SchemaElement;
  @Output() deleteElement: EventEmitter<SchemaElement> = new EventEmitter<SchemaElement>();
  schemaElementTypes: SchemaElementType[] = ['string', 'boolean', 'number', 'id'];
  constructor() { }
  ngOnInit(): void { }
  onDeleteElement(): void {
    this.deleteElement.emit(this.element);
  }

}
