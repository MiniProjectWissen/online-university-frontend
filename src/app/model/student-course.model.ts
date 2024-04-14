

export class StudentCourse {
    id:{
        stud_id:number;
        course_id:number;
    }
    attendance_lecture_count:number;

    constructor(){
        this.id = {
            stud_id:0 ,
            course_id:0
        }
        
        this.attendance_lecture_count =0;
    }
}
