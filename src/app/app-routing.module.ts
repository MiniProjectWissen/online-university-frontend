import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './screens/registration/registration.component';
import { LoginComponent } from './screens/login/login.component';
import { StudentDashboardComponent } from './screens/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './screens/student-profile/student-profile.component';
import { EnrolledCoursesComponent } from './screens/enrolled-courses/enrolled-courses.component';
import { CourseComponent } from './screens/course/course.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent, outlet: 'primary' },
  { path: 'register', component: RegistrationComponent, outlet: 'primary' },
  { path: '', component: StudentDashboardComponent, outlet: 'primary' },
  { path: 'profile', component: StudentProfileComponent, outlet: 'primary' },
  { path: 'enrolledCourses', component: EnrolledCoursesComponent, outlet: 'primary' },
  { path: 'course', component: CourseComponent, outlet: 'primary' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
