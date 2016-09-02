import { NgModule, ModuleWithProviders } from '@angular/core';
import {QuestionRepo} from "./service/QuestionRepo";

@NgModule({
})
export class SurveyCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SurveyCommonModule,
      providers: [QuestionRepo]
    };
  }
}
