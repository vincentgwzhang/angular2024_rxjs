import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideHttpClient(withInterceptorsFromDi()),
      provideZoneChangeDetection({eventCoalescing: true}),
      provideRouter(routes),
      provideAnimationsAsync()
    ]
  })
  .catch((err) => console.error(err));
