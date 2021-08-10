import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import Experience_0001 from '@pages/formGroup/formGroup.component';
import Experience_0002 from '@pages/formControl/formControl.component';
import Experience_0003 from '@pages/nestedFormGroup/nestedFormGroup.component';
import Experience_0004 from '@pages/validationForm/validationForm.component';
import Experience_0005 from '@pages/crossValidationForm/crossValidationForm.component';
import Experience_0006 from '@pages/asyncValidationForm/asyncValidationForm.component';
import Experience_0007 from '@pages/httpCommunication/httpCommunication.component';
import Experience_0008 from '@pages/interceptorRequests/interceptorRequests.component';
import Experience_0009 from '@pages/routerParams/routerParams.component';
import Experience_0010 from '@pages/dependancyInjection/dependancyInjection.component';
import Experience_0011 from '@pages/useDI/useDI.component';
import Experience_0012 from '@pages/classInjection/classInjection.component';
import Experience_0013 from '@pages/eventPayload/eventPayload.component';

const routes: Routes = [
  { path: 'experience_0013', component: Experience_0013 },
  { path: 'experience_0012', component: Experience_0012 },
  { path: 'experience_0011', component: Experience_0011 },
  { path: 'experience_0010', component: Experience_0010 },
  { path: 'experience_0009', component: Experience_0009 },
  { path: 'experience_0008', component: Experience_0008 },
  { path: 'experience_0007', component: Experience_0007 },
  { path: 'experience_0006', component: Experience_0006 },
  { path: 'experience_0005', component: Experience_0005 },
  { path: 'experience_0004', component: Experience_0004 },
  { path: 'experience_0003', component: Experience_0003 },
  { path: 'experience_0002', component: Experience_0002 },
  { path: 'experience_0001', component: Experience_0001 },
  { path: '', component: Experience_0001 },
  { path: '**', component: Experience_0001 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
