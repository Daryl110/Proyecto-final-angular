import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Mat from '@angular/material/';

@NgModule({
  imports: [
    CommonModule,
    Mat.MatButtonModule,
    Mat.MatFormFieldModule,
    Mat.MatInputModule,
    Mat.MatIconModule
  ],
  exports: [
    Mat.MatButtonModule,
    Mat.MatFormFieldModule,
    Mat.MatInputModule,
    Mat.MatIconModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
