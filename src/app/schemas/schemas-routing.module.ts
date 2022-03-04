import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemasComponent } from './schemas.component';

const routes: Routes = [{ path: '', component: SchemasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemasRoutingModule { }
