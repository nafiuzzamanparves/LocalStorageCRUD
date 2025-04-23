import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  str: String = '';

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.callLocalApi().subscribe(data => {
      console.log(data);
      // debugger;
      this.str = data;
    });
  }
}
