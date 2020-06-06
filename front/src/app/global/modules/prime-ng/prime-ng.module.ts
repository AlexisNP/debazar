import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorModule} from 'primeng/paginator';

import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,
    TooltipModule,
    ProgressSpinnerModule
  ],
  exports: [
    TableModule,
    TooltipModule,
    ProgressSpinnerModule
  ]
})
export class PrimeNgModule {
}
