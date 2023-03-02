import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NationalViewComponent } from './shared/components/national-view/national-view.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { StateWiseViewComponent } from './shared/components/state-wise-view/state-wise-view.component';

const routes: Routes = [
  {
    path: "", component:StateWiseViewComponent
  },
  {
    path: "stateview", component: StateWiseViewComponent
  },
  {
    path: "nationalview", component:NationalViewComponent
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
