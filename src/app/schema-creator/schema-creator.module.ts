import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SchemaCreatorComponent } from './schema-creator.component';



@NgModule({
  declarations: [
    SchemaCreatorComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SchemaCreatorComponent,
  ]
})
export class SchemaCreatorModule { }
