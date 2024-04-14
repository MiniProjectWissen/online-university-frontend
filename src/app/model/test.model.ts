export class Test {
 
    test_id:number;
    start_time:Date;
    end_time:Date;
    total_marks:number;
    test_content:String;
    course_id:number;

    constructor()
    {
        this.test_id=0;
        this.start_time=new Date();
        this.end_time=new Date();
        this.total_marks=0;
        this.test_content="";
        this.course_id=0;
    }
}
