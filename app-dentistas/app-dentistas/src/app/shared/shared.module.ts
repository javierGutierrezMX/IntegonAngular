import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightDirective } from './Directives/copyright.directive';
import { NumericDirective } from './Directives/numeric.directive';
import { PermissionDirective } from './Directives/permission.directive';
import { SortPipe } from './pipes/sort-asc-desc.pipe';



@NgModule({
  declarations: [
    CopyrightDirective,
      NumericDirective,
      PermissionDirective,
      SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    SortPipe
  ]
})
export class SharedModule { }
