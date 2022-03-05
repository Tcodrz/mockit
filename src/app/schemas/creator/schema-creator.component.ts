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
}
