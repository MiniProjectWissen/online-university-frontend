import { Component, OnInit } from '@angular/core';
import { NgForm, NumberValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/course.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  myCourseSubscription: Subscription
  myCourseList : Course[];
  newCourse :Course;

  fileContent: File;

  constructor(public cs:CourseService,public ts:TeacherService) {
    this.myCourseSubscription = new Subscription();
    this.myCourseList = [];
    this.newCourse = new Course();
   }

  ngOnInit(): void {
    this.loadTeacherCourses();
  }

  loadTeacherCourses(){
    let teacherId = this.ts.teacher.teacher_id;
    console.log(teacherId)
    this.myCourseSubscription = this.cs.getAllCoursesByTeacher(teacherId).subscribe(
      (courses:Course[])=>{
        this.myCourseList = courses;
        console.log("Recieved course list by teacher "+courses)
      }
    )

  }

  onFileSelected(event:any): void {
    this.fileContent = event.target.files[0];
    
  }

  // readFile(selectedFile:File): void {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.fileContent = reader.result as string;
  //   };
  //   reader.readAsText(selectedFile);
  // }


  submitCourse(form:NgForm){
    this.newCourse = form.value as Course;
    this.newCourse.teacher_id = this.ts.teacher.teacher_id;
    this.newCourse.lectures_taken = 0;
    this.newCourse.sch_days = "1111111";

    const formData = new FormData();
    formData.append('file', this.fileContent);
    this.cs.addFile(formData).subscribe((res)=>{
      console.log(res);
      this.newCourse.syllabus = res['msg'];
      console.log(this.newCourse);
      this.cs.addCourse(this.newCourse).subscribe({
        "error":(error:any)=>{
            console.log('An error occurred while adding a course:', error);
        },
        "complete": ()=>{
            console.log("Course Added successfully")
            this.loadTeacherCourses()
        }
      })
    })
    
    }
  
}
