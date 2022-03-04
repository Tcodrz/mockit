import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './toolbar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    ToolbarComponent,
  ]
})
export class ToolbarModule { }
