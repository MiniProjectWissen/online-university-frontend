import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { TeacherService } from 'src/app/service/teacher.service';
import { Test } from 'src/app/model/test.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.css']
})
export class TeacherCourseComponent implements OnInit {
  
  fileContent:SafeResourceUrl;
  constructor(public es:CourseService,private ts:TeacherService,private sanitizer: DomSanitizer) { 
    
  }

  ngOnInit(): void {
    // setTimeout(this.loadSyllabus,2000);
    // this.loadSyllabus()
  }

  incrementLectureCnt()
  {
    this.es.incrementLectureCnt(this.es.courseIdSelectedByTeacher).subscribe((res)=>{
      console.log("attendance incremented success")
    })
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

  }
