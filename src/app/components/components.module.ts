import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PrimaryNavbarComponent } from './primary-navbar/primary-navbar.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    PrimaryNavbarComponent,
    RangeSliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    PageHeaderComponent,
    PageFooterComponent,
    PrimaryNavbarComponent,
    RangeSliderComponent
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
      providers: [

      ]
    };
  }
}
