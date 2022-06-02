import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetflixComponent } from './mobile/netflix/netflix.component';
import { DetailComponent } from './mobile/detail/detail.component';

const routes: Routes = [
  { path: '', component: NetflixComponent, },
  { path: 'detail', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
