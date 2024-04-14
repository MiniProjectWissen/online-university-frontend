import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course.model';
import { StudentCourse } from 'src/app/model/student-course.model';
import { CourseService } from 'src/app/service/course.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  allCourseList:Course[];
  flag:boolean;
  newStudentCourse:StudentCourse;
  constructor(private es:CourseService,private ss: StudentService,private router:Router) { 
    this.allCourseList = []
    this.flag = true;
    this.newStudentCourse = new StudentCourse();
  }

  ngOnInit(): void {
    this.displayAllCourses()
  }
  displayAllCourses(){
    this.es.getAllCourses().subscribe(
      (res) =>{
        this.es.allCourse = res as Course[];
        this.allCourseList = res as Course[]
      }
    )
    this.setEnroll()
  }
  setEnroll(){
    let role: String | null = null;
    role = localStorage.getItem("role");
    console.log(role)
    if(role==='"Student"'){
      this.flag = false;
    }
  }
  enrollStudentToCourse(course_id:number){
    let stud_id = this.ss.student.stud_id;
    
    this.newStudentCourse.id.stud_id = stud_id;
    this.newStudentCourse.id.course_id = course_id;

    this.es.addStudentCourse(this.newStudentCourse).subscribe(
      {
        "error":(error)=>{
           console.log("error occured while adding student course entry" + error)
        },
        "complete": ()=>{
            console.log("student course added successfully")
            this.router.navigate(['enrolledCourses'])
        }
      }
    )
    


  }

}
