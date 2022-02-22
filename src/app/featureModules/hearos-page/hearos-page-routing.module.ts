import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HearosPageComponent } from './hearos-page.component';

const routes: Routes = [
  {
    path:'',
    component: HearosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HearosPageRoutingModule { }
