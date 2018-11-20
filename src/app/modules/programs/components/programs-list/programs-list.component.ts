import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadPrograms, ResetDetails } from '../../actions/programs.actions';
import * as fromStore from '../../reducers/programs.reducer';
import { Program } from '../../models/program';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss'],
})
export class ProgramsListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  programs$: Observable<Program[]>;
  selectedProgramId: string;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private store: Store<fromStore.ProgramsState>,
  ) {
    this.programs$ = this.store.pipe(select(fromStore.selectPrograms));

    this.subscription = this.programs$.subscribe(data =>
      this.preparePrograms(data),
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadPrograms());
  }

  preparePrograms(data: any): void {
    if (!data) {
      this.store.dispatch(new LoadPrograms());
      return;
    }
  }

  openProgram(program: Program) {
    if (program) {
      this.router.navigate([`/programs/${program.id}`], {
        relativeTo: this.route,
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
