/**
 * RevoGrid Enterprise — Pivot Plugin starter (Angular)
 *
 * Required dependencies:
 *   @revolist/angular-datagrid
 *   @revolist/revogrid-pro
 *   @revolist/revogrid-enterprise
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch(console.error);
