import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Employee } from './pages/employee/employee';
import { Leave } from './pages/leave/leave';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default route
  { path: 'login', component: Login },

  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'employee', component: Employee },
      { path: 'leave', component: Leave },
    ],
  },

  // wildcard route (for 404 page not found, optional)
  { path: '**', redirectTo: 'login' },
];
