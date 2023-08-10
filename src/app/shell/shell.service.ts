import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core';
import { ShellComponent } from './shell.component';

@Injectable({
  providedIn: 'root'
})
/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}

