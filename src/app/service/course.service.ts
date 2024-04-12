import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  selectedCourse:Course;
  enrolledCourses:Course[];
  allCourse:Course[];

  url:string ="http://localhost:8081/course";

  constructor(private http: HttpClient) { 
    this.selectedCourse={
      course_id:1,
      forum_id:1,
      teacher_id:1,
      title:"Angular Basic",
      description:"Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.",
      start_date:new Date("2024-09-09"),
      end_date:new Date("2024-09-09"),
      sch_days:"0000000",
      syllabus:"jjaa",
      join_time:new Date(),
      end_time:new Date(),
      lectures_taken:0
    }
    this.enrolledCourses=[
      // {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
      // {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
      // {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
      // {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
      // {course_id:1,teacher_id:1,forum_id:1, title: 'Angular Basics',description: 'Brief description of the course goes here. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer posuere erat a ante.' ,start_date:new Date('2022-04-11'),end_date:new Date('2022-04-11'),sch_days:"00000",syllabus:"jajjaja", join_time:new Date('2022-04-11'),end_time:new Date('2022-04-11'),lectures_taken:0},
    ];
    this.allCourse=[];
  }

  getAllCourses()
  {
    return this.http.get(this.url+"/get/all");
  }

  getAllEnrolledCourses(stud_id:number)
  {
    return this.http.get(this.url+"/getEnrolledCourses/"+stud_id);
  }
}
