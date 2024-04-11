import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './screens/registration/registration.component';
import { LoginComponent } from './screens/login/login.component';
import { StudentDashboardComponent } from './screens/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './screens/student-profile/student-profile.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent, outlet: 'primary' },
  { path: 'register', component: RegistrationComponent, outlet: 'primary' },
  { path: '', component: StudentDashboardComponent, outlet: 'primary' },
  { path: 'profile', component: StudentProfileComponent, outlet: 'primary' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
