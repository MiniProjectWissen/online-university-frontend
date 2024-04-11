export class Student {

    stud_id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    address: string;
    phone_number: string;
    gender: string;
    dob: Date;
    roll_no: string;
    standard: number;
  
    constructor(
      stud_id: number=0,
      first_name: string='',
      last_name: string='',
      email: string='',
      password: string='',
      address: string='',
      phone_number: string='',
      gender: string='',
      dob: Date=new Date(),
      roll_no: string='',
      standard: number=0
    ) {
      this.stud_id = stud_id ;
      this.first_name = first_name ;
      this.last_name = last_name ;
      this.email = email ;
      this.password = password ;
      this.address = address ;
      this.phone_number = phone_number ;
      this.gender = gender ;
      this.dob = dob ;
      this.roll_no = roll_no ;
      this.standard = standard ;
    }
  }
  
