import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Activity } from '../../models/activity';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatSnackBar } from '@angular/material';

import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../reducers/programs.reducer';
import { CreateActivity } from '../../actions/programs.actions';

export const DEFAULT_DATE_MODE_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LLL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-Gb' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: DEFAULT_DATE_MODE_FORMATS },
  ],
})
export class NewActivityComponent implements OnInit, OnDestroy {
  newActivityForm: FormGroup;
  newActivity: Activity;
  programId: string;

  minStartDate: moment.Moment;
  minEndDate: moment.Moment;

  subscription: Subscription;
  newActivity$: Observable<any>;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly store: Store<fromStore.ProgramsState>,
  ) {
    this.newActivity$ = store.pipe(select(fromStore.selectCreatedActivity));
    this.subscription = this.newActivity$.subscribe(data => {
      console.log('createdActivity', data);

      if (data) {
        if (data.createdActivity as Activity) {
          console.log('createdActivity', data.createdActivity);
          this.snackBar.open('New activity successfully saved', 'Ok', {
            duration: 3000,
          });

          const navigateTo = '';
          this.router.navigate([navigateTo], { relativeTo: this.route });
        } else {
          this.snackBar.open(
            'There was an error creating the new activity',
            'Ok',
            {
              duration: 3000,
            },
          );
        }
      }
    });

    this.subscription.add(
      this.route.params.subscribe(params => {
        const programId = (params['id'] as string) || null;
        if (this.programId !== '' && this.programId !== 'new-activity') {
          console.log('programId', this.programId);

          this.programId = programId;
        } else {
          this.router.navigate([`/programs`], {
            relativeTo: this.route,
          });
        }
      }),
    );
  }

  ngOnInit() {
    this.minStartDate = moment();
    this.minEndDate = this.minStartDate.add(1, 'd');

    this.prepareForm(this.minStartDate);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  prepareForm(startDate: moment.Moment) {
    this.newActivityForm = this.fb.group({
      name: [
        null,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      startDate: [startDate, Validators.required],
      endDate: [null, Validators.required],
    });

    this.startDateControl.valueChanges.subscribe(value => {
      if (value) {
        const momentStartDate = moment(value);
        const momentEndDate = moment(this.endDateControl.value);

        if (momentStartDate && momentStartDate.isValid()) {
          this.minEndDate = momentStartDate.add(1, 'd');

          console.log(this.minEndDate);

          if (momentStartDate.isSameOrAfter(momentEndDate)) {
            this.endDateControl.setValue(null);
          }
        }
      }
    });
  }

  get nameControl(): FormControl {
    return <FormControl>this.newActivityForm.get('name');
  }

  get startDateControl(): FormControl {
    return <FormControl>this.newActivityForm.get('startDate');
  }

  get endDateControl(): FormControl {
    return <FormControl>this.newActivityForm.get('endDate');
  }

  get isFormValid() {
    if (this.newActivityForm.invalid) {
      this.nameControl.markAsTouched();
      this.startDateControl.markAsTouched();
      this.endDateControl.markAsTouched();
      return false;
    } else {
      return true;
    }
  }

  onSubmit() {
    if (this.isFormValid && this.programId) {
      this.newActivity = new Activity({
        workflowlevel1: `https://dev.toladata.io/api/workflowlevel1/${
          this.programId
        }/`,
        name: this.newActivityForm.value.name,
        expected_start_date: moment(
          this.newActivityForm.value.startDate,
        ).format('YYYY-MM-DDThh:mm'),
        expected_end_date: moment(
          this.newActivityForm.value.endDate,
        ).toLocaleString(),
      });

      this.store.dispatch(new CreateActivity(this.newActivity));
    }
  }
}
