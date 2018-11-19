import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewActivityComponent } from './components/new-activity/new-activity.component';
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSnackBarModule, MatSidenavModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NewActivityComponent,
    ProgramsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
