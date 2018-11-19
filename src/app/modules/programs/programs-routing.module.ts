import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewActivityComponent } from './components/new-activity/new-activity.component';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';

const routes: Routes = [
  { path: '', component: ProgramsListComponent },
  { path: ':id', component: ProgramDetailsComponent },
  { path: 'new-activity', component: NewActivityComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramsRoutingModule {}
