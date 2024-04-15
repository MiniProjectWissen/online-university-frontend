import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  flag: boolean;
  showHeader: boolean = true;

  constructor(private router: Router,public as:AuthService) { 
    this.flag = false;
  }

  ngOnInit(): void {
    this.display();
    this.router.events.subscribe(() => {
      this.showHeader = this.router.url !== '';
    });
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
