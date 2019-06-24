import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Inochidemo3SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Inochidemo3SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Inochidemo3SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Inochidemo3SharedModule {
  static forRoot() {
    return {
      ngModule: Inochidemo3SharedModule
    };
  }
}
