import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SchemaCreatorComponent } from './creator/schema-creator.component';
import { SchemasRoutingModule } from './schemas-routing.module';
import { SchemasComponent } from './schemas.component';
import { FieldRowComponent } from './field-row/field-row.component';
import { SchemasListComponent } from './schemas-list/schemas-list.component';


@NgModule({
  declarations: [
    SchemaCreatorComponent,
    SchemasComponent,
    FieldRowComponent,
    SchemasListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SchemasRoutingModule,
  ]
})
export class SchemasModule { }
