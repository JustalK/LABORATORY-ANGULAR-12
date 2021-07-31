import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import Experience_0001 from '@pages/formGroup/formGroup.component';
import Experience_0002 from '@pages/formControl/formControl.component';

const routes: Routes = [
  { path: 'experience_0002', component: Experience_0002 },
  { path: 'experience_0001', component: Experience_0001 },
  { path: '', component: Experience_0001 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
