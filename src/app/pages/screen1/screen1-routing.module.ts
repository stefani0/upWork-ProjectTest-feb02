import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Screen1Page } from './screen1.page';

const routes: Routes = [
  {
    path: '',
    component: Screen1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Screen1PageRoutingModule {}
