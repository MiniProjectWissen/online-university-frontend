import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './screens/registration/registration.component';
import { LoginComponent } from './screens/login/login.component';
import { StudentProfileComponent } from './screens/student-profile/student-profile.component';
import { EnrolledCoursesComponent } from './screens/enrolled-courses/enrolled-courses.component';
import { TeacherProfileComponent } from './screens/teacher-profile/teacher-profile.component';
import { MyCoursesComponent } from './screens/my-courses/my-courses.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent, outlet: 'primary' },
  { path: 'register', component: RegistrationComponent, outlet: 'primary' },
  { path: 'profile', component: StudentProfileComponent, outlet: 'primary' },
  { path: 'teacherprofile', component: TeacherProfileComponent, outlet: 'primary' },
  { path: 'enrolledCourses', component: EnrolledCoursesComponent, outlet: 'primary' },
  { path: 'myCourses', component: MyCoursesComponent, outlet: 'primary' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
