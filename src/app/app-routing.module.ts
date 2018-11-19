import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewActivityComponent } from './components/new-activity/new-activity.component';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';

const routes: Routes = [
  { path: '', component: ProgramsListComponent },
  { path: 'new-activity', component: NewActivityComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
