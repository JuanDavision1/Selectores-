import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorPAgeComponent } from './pages/selector-page/selector-page.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'selector',component:SelectorPAgeComponent },
      { path:'**',redirectTo:'selector'}]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
