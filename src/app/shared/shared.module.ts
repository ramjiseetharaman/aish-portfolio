import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';

import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    CommonModule,
    FooterComponent,
    NgxGalleryModule
  ]
})
export class SharedModule {}
