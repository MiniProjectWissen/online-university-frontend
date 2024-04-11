export class Student {
    password:String;
    first_name: String;
    last_name: String;
    email: String;
    phone_number:String;
    dob:Date;
    gender:String;
    address:String;
    roll_no: String;
    standard: number;


    constructor(){
        this.first_name = "";
        this.last_name = "";
        this.password = "";
        this.email = "";
        this.address = "";
        this.phone_number = "";
        this.dob = new Date();
        this.gender = "";
        this.roll_no = "";
        this.standard = 0;
    }
}
