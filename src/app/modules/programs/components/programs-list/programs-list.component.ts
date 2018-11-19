import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  LoadProgramsList,
  LoadProgramsListSuccess,
  LoadProgramListsFail,
} from '../../actions/programs-list.actions';
import * as fromProgramsList from '../../reducers/programs-list.reducer';
import { Program } from '../../models/program';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss'],
})
export class ProgramsListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  getProgramsList$: Observable<Array<Program>>;

  constructor(private store: Store<fromProgramsList.State>) {
    this.getProgramsList$ = store.pipe(select(LoadProgramsList));
  }

  ngOnInit() {
    this.subscription = this.getProgramsList$.subscribe(data =>
      this.prepareProgramsList(data),
    );
  }
  prepareProgramsList(data: Program[]): void {
    console.log('data', data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
