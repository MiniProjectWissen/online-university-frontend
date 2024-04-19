export class Course {

    course_id:number;
	forum_id:number;
    teacher_id:number;
	title: String;
	description: String;
	start_date: Date;
	end_date: Date;
	sch_days: String;
	syllabus: string;
	join_time: Date;
	end_time: Date;
	lectures_taken: number;

    constructor()
    {
        this.course_id=0;
        this.forum_id=0;
        this.teacher_id=0;
        this.title="";
        this.description="";
        this.start_date=new Date();
        this.end_date=new Date();
        this.sch_days="";
        this.syllabus="";
        this.join_time=new Date();
        this.end_time=new Date();
        this.lectures_taken=0;
    }
}