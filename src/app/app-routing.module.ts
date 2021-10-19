import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HmeComponent } from './hme/hme.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  { path: '', component: HmeComponent },
  { path: 'xyz', component: XyzComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
