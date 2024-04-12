import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Teacher } from 'src/app/model/teacher.model';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  flag: boolean;
  teacher:Teacher;
  teacherSubscription:Subscription;

  constructor(private teacherService: TeacherService) { 
    this.flag = true;
    this.teacherSubscription = new Subscription();
    this.teacher = teacherService.teacher;
  }

  ngOnInit(): void {
  }

  getTeacherProfile(){
    let storedString = localStorage.getItem('userId');

    if (storedString !== null && storedString !== undefined) {
    storedString = storedString.replace(/"/g, '');

    this.teacherSubscription = this.teacherService.getTeacherByEmail(storedString).subscribe(
      (teacher:Teacher) => {
        this.teacherService.teacher = teacher;
        this.teacher = this.teacherService.teacher;
        console.log('Received teacher data:', teacher);
      }
     
      )
    // Now storedString does not contain any double quotes
    console.log(storedString);
}
  }

  allowEdit():void{
    this.flag  = false;
}
onSubmit(){
  this.teacherService.updateTeacher(this.teacher.teacher_id,this.teacher).subscribe(
    {
      "error":(error:any)=>{
          console.log('An error occurred while adding a student:', error);
      },
      "complete": ()=>{
          console.log("Successfully Updated Profile")
          this.getTeacherProfile()
      }
    }


  )
  console.log(this.teacher)
  this.flag = true;
}

}
