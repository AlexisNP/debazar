import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const MODULE = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
]

@NgModule({
  declarations: [],
  imports: [
    MODULE
  ],
  exports: [
    MODULE
  ]
})
export class MaterialModule { }
