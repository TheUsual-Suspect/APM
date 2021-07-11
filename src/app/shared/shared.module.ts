import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedByPercentageComponent } from './selectedBy.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectedByPercentageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectedByPercentageComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
