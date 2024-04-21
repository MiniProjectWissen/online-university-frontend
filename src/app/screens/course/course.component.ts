import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/course.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  scheduled_days=[];
  attendance:any;
  

  constructor(public es:CourseService,public ss:StudentService, private router: Router) { 
    this.attendance=0.0;
   
  }

  ngOnInit(): void {

    this.setAttendance();
    
  }

  loadSyllabus(){
    this.es.downloadFile().subscribe(
      // response => {
      //   console.log("recieved file")
      //   const blob = new Blob([response.body], { type: response.headers.get('content-type') });
      //   const url = URL.createObjectURL(blob);
      //   console.log(url)
      //   this.fileContent = this.sanitizer.bypassSecurityTrustResourceUrl(url);    
      //   console.log(this.fileContent) 
      //  },
      // error => {
      //   console.error('Error downloading file:', error);
      // }
      (blob: Blob) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'file.pdf'; // Change the file name if needed
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      },
      error => {
        console.error('Error downloading file:', error);
      }
    );
  }


  
  findScheduleDays()
  {
    
  }

  setAttendance()
  {
    console.log("attendance")
    console.log(this.ss.student.stud_id+" : "+this.es.selectedCourse.course_id+" "+this.es.courseIdSelectedByTeacher);
    this.es.getCourseAttendance(this.ss.student.stud_id,this.es.courseIdSelectedByTeacher).subscribe((res)=>{
      this.attendance=res;
      console.log("course attendance got")
    });
    console.log(this.attendance);
  }

  goToForum(): void {
    // Navigate to the forum page
    

    this.router.navigate(['/forum', this.es.selectedCourse.forum_id]);
  }


}
