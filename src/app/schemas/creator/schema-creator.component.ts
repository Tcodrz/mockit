import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SchemaElement, SchemaElementType } from 'src/app/core/models/schema-element.interface';
import { ISchema } from 'src/app/core/models/schema.interface';



@Component({
  selector: 'app-schema-creator',
  templateUrl: './schema-creator.component.html',
  styleUrls: ['./schema-creator.component.scss']
})
export class SchemaCreatorComponent implements OnInit {
  schemaElements: SchemaElement[] = [
    { type: 'id', fieldName: 'id', },
    { type: 'string', fieldName: 'name' },
    { type: 'number', fieldName: 'phone' },
  ];
  schema: ISchema = {} as ISchema;
  constructor() { }
  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray([], event.previousIndex, event.currentIndex);
  }
  onAddField() {
    const schemaElement: SchemaElement = { fieldName: '', type: 'string' };
    this.schemaElements.push(schemaElement);
  }
  onDeleteElement(element: SchemaElement): void {
    const index = this.schemaElements.findIndex(e => e === element);
    this.schemaElements.splice(index, 1);
  }
}
