import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
<<<<<<< dev
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
=======
import { MatProgressSpinnerModule } from '@angular/material';
>>>>>>> try to make OfferController work

const MODULE = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
<<<<<<< dev
  MatProgressSpinnerModule,
=======
  MatProgressSpinnerModule
>>>>>>> try to make OfferController work
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
