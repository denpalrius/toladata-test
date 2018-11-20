import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromProgramList from './reducers/programs.reducer';
import { NewActivityComponent } from './components/new-activity/new-activity.component';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { StoreModule } from '@ngrx/store';
import { ProgramsService } from './services/programs.service';
import { RouterModule } from '@angular/router';
import { ProgramsRoutingModule } from './programs-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ProgramsEffects } from './effects/programs.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NewActivityComponent,
    ProgramsListComponent,
    ProgramDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    SharedModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('programList', fromProgramList.reducer),
    EffectsModule.forFeature([ProgramsEffects]),
  ],
  providers: [ProgramsService],
})
export class ProgramsModule {}
