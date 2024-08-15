import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(appRoutes))]
})
  .catch(err => console.error(err));
