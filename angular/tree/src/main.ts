/**
 * RevoGrid Tree Plugin starter (Angular)
 *
 * Required dependencies:
 *   @revolist/angular-datagrid
 *   @revolist/revogrid-pro
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch(console.error);
