import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { storeFreeze } from 'ngrx-store-freeze';
import { SharedModule } from './modules/shared/shared.module';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: 'Toladata Store DevTools',
          logOnly: environment.production,
        })
      : [],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
