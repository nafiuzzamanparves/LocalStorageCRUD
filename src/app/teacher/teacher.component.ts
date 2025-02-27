import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher',
  imports: [],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {
  teachers: Teacher[] = [];
  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    console.log('Teacher');
    this.fetchTeachers();
  }

  fetchTeachers() {
    this.teacherService.getTeachers().subscribe(
      (data) => {
        this.teachers = data;
        console.log('Fetched teachers:', this.teachers);
      },
      (error) => {
        console.error('Error fetching teachers:', error);
        this.teachers = [];
      }
    );
  }

}

class Teacher {
  id: number;
  name: string;
  schoolName: string;
  isHeadTeacher: boolean;
  assignedSubject: string;
  salary: number;
  joiningDate: Date;
  isAggressive: boolean;

  constructor(id: number, name: string, schoolName: string, isHeadTeacher: boolean, assignedSubject: string, salary: number, joiningDate: Date, isAggressive: boolean) {
    this.id = id;
    this.name = name;
    this.schoolName = schoolName;
    this.isHeadTeacher = isHeadTeacher;
    this.assignedSubject = assignedSubject;
    this.salary = salary;
    this.joiningDate = joiningDate;
    this.isAggressive = isAggressive;
  }
} 
