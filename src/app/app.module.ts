import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './screens/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './screens/login/login.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { ModalComponent } from './shared/component/modal/modal.component';
import { EnrolledCoursesComponent } from './screens/enrolled-courses/enrolled-courses.component';
import { CourseComponent } from './screens/course/course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './service/auth.service';
import { StudentService } from './service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon'; 
import { StudentProfileComponent } from './screens/student-profile/student-profile.component';
import { CourseService } from './service/course.service';
import { TeacherProfileComponent } from './screens/teacher-profile/teacher-profile.component';
import { MyCoursesComponent } from './screens/my-courses/my-courses.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { AllCoursesComponent } from './screens/all-courses/all-courses.component';
import { TestComponent } from './screens/test/test.component';
import { TeacherCourseComponent } from './screens/teacher-course/teacher-course.component';
import { StudentAttendanceComponent } from './screens/student-attendance/student-attendance.component';
import { ForumComponent } from './screens/forum/forum.component';
import { ForumService } from './service/forum.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PreviousTestComponent } from './screens/previous-test/previous-test.component';
import { TeacherTestComponent } from './screens/teacher-test/teacher-test.component';
import { MarksComponent } from './screens/marks/marks.component';
import { UpcomingTestComponent } from './screens/upcoming-test/upcoming-test.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
         LoginComponent,
         HeaderComponent,
         FooterComponent,
         LoaderComponent,
         ModalComponent,
         StudentProfileComponent,
         EnrolledCoursesComponent,
         CourseComponent,
         TeacherProfileComponent,
         MyCoursesComponent,
         AllCoursesComponent,
         TeacherCourseComponent,
         TestComponent,
         StudentAttendanceComponent,
         ForumComponent,
         UpcomingTestComponent,
         PreviousTestComponent,
         TeacherTestComponent,
         MarksComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpClientModule,BrowserAnimationsModule,
    MatGridListModule,MatIconModule,MatFormFieldModule

  ],
  providers: [AuthService,StudentService,CourseService, ForumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
