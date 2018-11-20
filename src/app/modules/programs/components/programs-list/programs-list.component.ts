import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadPrograms } from '../../actions/programs.actions';
import * as fromStore from '../../reducers/programs.reducer';
import { Program } from '../../models/program';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss'],
})
export class ProgramsListComponent implements OnDestroy {
  subscription: Subscription;
  programs$: Observable<Program[]>;
  programsList: Program[];

  constructor(private store: Store<fromStore.ProgramsState>) {
    this.programs$ = this.store.pipe(select(fromStore.selectPrograms));

    this.subscription = this.programs$.subscribe(data =>
      this.prepareProgramsList(data),
    );
  }

  prepareProgramsList(data: Program[]): void {
    if (!data) {
      this.store.dispatch(new LoadPrograms());
      return;
    }

    this.programsList = data;

    console.log('data', this.programsList);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
