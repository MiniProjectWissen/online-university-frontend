import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  flag: boolean;
  constructor() { 
    this.flag = false;
  }

  ngOnInit(): void {
    this.display();
  }
  display(){
    let role: String | null = null;
    role = localStorage.getItem("role");
    console.log(role)
    if(role==='"Teacher"'){
      this.flag = true;
    }
  }
}
