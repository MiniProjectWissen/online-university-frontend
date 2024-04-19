import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/model/message.model';
import { ForumService } from 'src/app/service/forum.service';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';
import { TeacherService } from 'src/app/service/teacher.service';
import { Teacher } from 'src/app/model/teacher.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  forumId: number = 0;
  id: number = 0;
  messages: Message[] = [];
  newMessage : string="";
  emailId : string="";
  firstName : string="";
  @ViewChild('chatBody') private chatBody!: ElementRef;

  constructor(private route: ActivatedRoute, public forumService: ForumService, private studentService:StudentService,private teacherService:TeacherService,private readonly elementRef: ElementRef) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.forumId = params['forumId'];
      this.getMessages();
      this.getUser();
      
    });
  }
  
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    setTimeout(() => {
      try {
        const isScrolledToBottom = this.chatBody.nativeElement.scrollHeight - this.chatBody.nativeElement.clientHeight <= this.chatBody.nativeElement.scrollTop + 1;
        if (!isScrolledToBottom) {
          this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
        }
      } catch(err) {
        console.log(err);
      }
    }, 100); // Adjust the delay as needed
  }

  formatTimestamp(timestamp: Date): string {
    const messageDate = new Date(timestamp);
    const currentDate = new Date();
  
    // Check if the message date is different from the current date
    const isDifferentDay = messageDate.getDate() !== currentDate.getDate() ||
                           messageDate.getMonth() !== currentDate.getMonth() ||
                           messageDate.getFullYear() !== currentDate.getFullYear();
  
    if (isDifferentDay) {
      // If message date is different, display the full date
      return messageDate.toLocaleDateString();
    } else {
      // If message date is the same, display time without seconds
      return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }

  

  getUser():void{
    let storedString = localStorage.getItem('role');
    let role: String="";

    if (storedString !== null && storedString !== undefined) {
        role = storedString.replace(/"/g, '');
    }

    storedString = localStorage.getItem('userId');

    if (storedString !== null && storedString !== undefined) {
      this.emailId = storedString.replace(/"/g, ''); 
    }
    else{
      console.log("can't load user id");
    }

    
    console.log(role);
    if(role=="Student"){
      
      let student: Student=new Student();
      this.studentService.getStudentByEmail(this.emailId).subscribe(
        (response: Student) => {
          
          student = response as Student;
          this.firstName=student.first_name;
          this.id=student.stud_id;
          
          
        }
       
        )

      

    }
    else{

      let teacher: Teacher=new Teacher();
      this.teacherService.getTeacherByEmail(this.emailId).subscribe(
        (response: Teacher) => {
          
          teacher = response;
          this.firstName=teacher.first_name;
          this.id=teacher.teacher_id;
          
        }
       
        )

      

    }
    
  }
  

  getMessages(): void {
    this.forumService.receiveMessages(this.forumId)
      .subscribe(messages => {
        this.messages = messages;
      });
  }
  

  sendMessage(): void {
    const newMessageObj: Message = {
      message_id:0,
      forum_id: this.forumId,
      user_id: this.id, // Assuming you have a logged-in user with userId
      first_name: this.firstName, // Assuming you have a logged-in user with firstName
      message: this.newMessage,
      timestamp: new Date()
    };
    this.forumService.sendMessage(newMessageObj)
      .subscribe(savedMessage => {
        // Add the saved message to the list
        this.messages.push(savedMessage);
        this.newMessage = '';
        this.scrollToBottom(); // Scroll to bottom after sending a message
      });
  }

  
}
