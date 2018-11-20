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
export class ProgramsListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  getProgramsList$: Observable<Array<Program>>;

  constructor(private store: Store<fromStore.ProgramsState>) {
    this.getProgramsList$ = store.pipe(select(LoadPrograms));
  }

  ngOnInit() {
    // this.store.dispatch(new LoadPrograms());
    // this.subscription = this.getProgramsList$.subscribe(data =>
    //   this.prepareProgramsList(data),
    // );
  }
  prepareProgramsList(data: Program[]): void {
    console.log('data', data);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
