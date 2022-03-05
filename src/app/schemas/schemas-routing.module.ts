import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemaCreatorComponent } from './creator/schema-creator.component';
import { SchemasComponent } from './schemas.component';

const routes: Routes = [
  { path: '', component: SchemasComponent },
  { path: 'create', component: SchemaCreatorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemasRoutingModule { }
