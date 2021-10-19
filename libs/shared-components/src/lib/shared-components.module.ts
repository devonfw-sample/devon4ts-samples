import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { BasicLayoutPageTemplateComponent } from './basic-layout-page-template/basic-layout-page-template.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule
  ],
  declarations: [BasicLayoutComponent, BasicLayoutPageTemplateComponent],
  exports: [BasicLayoutComponent, BasicLayoutPageTemplateComponent],
})
export class SharedComponentsModule {}
