import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import Experience_0001 from '@pages/formGroup/formGroup.component';
import Experience_0002 from '@pages/formControl/formControl.component';
import Experience_0003 from '@pages/nestedFormGroup/nestedFormGroup.component';
import Experience_0004 from '@pages/validationForm/validationForm.component';
import Experience_0005 from '@pages/crossValidationForm/crossValidationForm.component';

const routes: Routes = [
  { path: 'experience_0005', component: Experience_0005 },
  { path: 'experience_0004', component: Experience_0004 },
  { path: 'experience_0003', component: Experience_0003 },
  { path: 'experience_0002', component: Experience_0002 },
  { path: 'experience_0001', component: Experience_0001 },
  { path: '', component: Experience_0001 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
