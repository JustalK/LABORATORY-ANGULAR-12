import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import Experiment_0001 from '@pages/formGroup/formGroup.component';
import SecondaryComponent from '@pages/secondary/secondary.component';

const routes: Routes = [
  { path: 'secondary', component: SecondaryComponent },
  { path: '', component: Experiment_0001 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
