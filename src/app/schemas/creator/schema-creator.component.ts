import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchemaElement } from 'src/app/core/models/schema-element.interface';
import { ISchema } from 'src/app/core/models/schema.interface';

@Component({
  selector: 'app-schema-creator',
  templateUrl: './schema-creator.component.html',
  styleUrls: ['./schema-creator.component.scss']
})
export class SchemaCreatorComponent implements OnInit {
  @Input() withName: boolean = true;
  schemaElements: SchemaElement[] = [
    { type: 'id', fieldName: '', },
  ];
  schema: ISchema = {} as ISchema;
  constructor(
    private activeRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      console.log(params['schemaID']);
    })
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
