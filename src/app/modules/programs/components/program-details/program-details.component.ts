import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Activity } from '../../models/activity';
import { select, Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import * as fromStore from '../../reducers/programs.reducer';
import { LoadProgram, ResetDetails } from '../../actions/programs.actions';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss'],
})
export class ProgramDetailsComponent implements OnInit, OnDestroy {
  programId: string;
  subscription: Subscription;
  getProgramActivities$: Observable<any>;
  activities: Activity[];
  newActivityId: string;

  tileColor = 'lightblue';

  showCreationForm = false;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private store: Store<fromStore.ProgramsState>,
  ) {
    this.getProgramActivities$ = store.pipe(select(fromStore.selectPrograms));
  }

  ngOnInit() {
    this.subscription = this.getProgramActivities$.subscribe(data =>
      this.prepareProgram(data.selectedActivities),
    );

    this.subscription.add(
      this.route.params.subscribe(params => {
        this.programId = (params['id'] as string) || null;
        console.log('programId', this.programId);
        if (this.programId !== '' && this.programId !== 'new-activity') {
          this.store.dispatch(new LoadProgram({ programId: this.programId }));
        }
      }),
    );
  }

  prepareProgram(activities: Activity[]) {
    if (activities) {
      this.activities = activities;
    }
  }

  newActivity() {
    if (this.programId) {
      console.log('programId', this.programId);

      this.router.navigate([`/programs/${this.programId}/new-activity`], {
        relativeTo: this.route,
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.store.dispatch(new ResetDetails());
  }
}
