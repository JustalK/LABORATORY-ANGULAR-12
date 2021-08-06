import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import Experience_0001 from '@pages/formGroup/formGroup.component';
import Experience_0002 from '@pages/formControl/formControl.component';
import Experience_0003 from '@pages/nestedFormGroup/nestedFormGroup.component';
import Experience_0004 from '@pages/validationForm/validationForm.component';
import Experience_0005 from '@pages/crossValidationForm/crossValidationForm.component';
import Experience_0006 from '@pages/asyncValidationForm/asyncValidationForm.component';
import Experience_0007 from '@pages/httpCommunication/httpCommunication.component';
import Experience_0008 from '@pages/interceptorRequests/interceptorRequests.component';
import Experience_0009 from '@pages/routerParams/routerParams.component';
import Experience_00010 from '@pages/dependancyInjection/dependancyInjection.component';
import Experience_00010_Children from '@pages/dependancyInjection/dependancyInjectionChildren.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

import { NoopInterceptor } from '@pages/interceptorRequests/noopInterceptor.service';
import { DependancyInjectionService } from '@pages/dependancyInjection/dependancyInjection.service';

@NgModule({
  declarations: [
    AppComponent,
    Experience_0001,
    Experience_0002,
    Experience_0003,
    Experience_0004,
    Experience_0005,
    Experience_0006,
    Experience_0007,
    Experience_0008,
    Experience_0009,
    Experience_00010,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, HttpClientJsonpModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    [{ provide: DependancyInjectionService, useClass: Experience_00010_Children }],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
