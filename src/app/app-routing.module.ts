import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import HomeComponent from '@pages/home/home.component';
import SecondaryComponent from '@pages/secondary/secondary.component';

const routes: Routes = [
  { path: 'secondary', component: SecondaryComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
