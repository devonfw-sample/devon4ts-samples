import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularLibraryComponent } from './angular-library.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AngularLibraryComponent
  ],
  exports: [
    AngularLibraryComponent
  ],
})
export class AngularLibraryModule {}
