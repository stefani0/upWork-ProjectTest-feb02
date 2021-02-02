import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Screen2Page } from './screen2.page';

const routes: Routes = [
  {
    path: '',
    component: Screen2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Screen2PageRoutingModule {}
