import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'budget-planner', // Redirect to 'budget-planner' by default
    pathMatch: 'full',
  },
  {
    path: 'budget-planner',
    loadChildren: () =>
      import('./budget-planner/budget-planner.module').then(
        (m) => m.BudgetPlannerModule
      ),
  },
  // Optionally add a wildcard route to catch unknown routes
  { path: '**', redirectTo: 'budget-planner/login' }, // Catch-all for undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
