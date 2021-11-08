import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core.module';
import { AppComponent } from './app.component';
import { DishFormComponent } from './dish-form/dish-form.component';
import { DishViewComponent } from './dishview/dishview.component';
import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [AppComponent,DishFormComponent, DishViewComponent],
  imports: [
    BrowserModule,
    CoreModule, // Module containing Angular Materials
    FormsModule,
  ],
  entryComponents: [DishFormComponent, DishViewComponent],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(DishFormComponent, {
      injector: this.injector,
    });
    customElements.define('dish-form', el);

    const elView = createCustomElement(DishViewComponent, {
      injector: this.injector,
    });
    customElements.define('dish-view', elView);
  }
}

