import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'hearos',
    loadChildren: () =>
      import("./featureModules/hearos-page/hearos-page.module").then(
        (m) => m.HearosPageModule
      )
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
