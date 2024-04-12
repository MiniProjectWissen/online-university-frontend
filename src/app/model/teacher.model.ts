export class Teacher {
    teacher_id:number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    address: string;
    phone_number: string;
    gender: string;
    dob: Date;
    position: String;
    is_admin: number;

    constructor(
        teacher_id: number =0,
        first_name: string='',
      last_name: string='',
      email: string='',
      password: string='',
      address: string='',
      phone_number: string='',
      gender: string='',
      dob: Date=new Date(),
      position: String='',
    is_admin: number = 0
    ){
        this.teacher_id = teacher_id;
        this.first_name = first_name ;
      this.last_name = last_name ;
      this.email = email ;
      this.password = password ;
      this.address = address ;
      this.phone_number = phone_number ;
      this.gender = gender ;
      this.dob = dob ;
      this.position = position;
      this.is_admin = is_admin;
    }
}
