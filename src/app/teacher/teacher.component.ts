import * as bootstrap from 'bootstrap';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from '../pipes/shorten.pipe';
import { Router } from '@angular/router';
import { Teacher } from '../model/teacher.model';

@Component({
  selector: 'app-teacher',
  imports: [FormsModule, CommonModule, ShortenPipe],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {
  teachers: Teacher[] = [];
  newTeacher: Teacher = new Teacher(0, '', '', false, '', 0, new Date(), false);
  isEditing: boolean = false;
  private modal: bootstrap.Modal | null = null;

  constructor(
    private teacherService: TeacherService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Teacher component initialized');
    this.getTeachers();

    const modalElement = document.getElementById('teacherModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }
  }

  openModal(teacher?: Teacher) {
    if (teacher) {
      this.newTeacher = { ...teacher };
      this.isEditing = true;
    } else {
      this.newTeacher = new Teacher(0, '', '', false, '', 0, new Date(), false);
      this.isEditing = false;
    }

    const modalElement = document.getElementById('teacherModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
      this.modal.show();
    }
  }

  getTeachers() {
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

  saveTeacher() {
    if (this.newTeacher) { // trhuthy value falsy value
      if (this.isEditing) {
        console.log('Updating teacher:', this.newTeacher);
        this.teacherService.updateTeacher(this.newTeacher).subscribe(
          (response) => {
            const index = this.teachers.findIndex(t => t.id === response.id);
            if (index !== -1) {
              this.teachers[index] = response;
            }
            this.modal?.hide();
          },
          (error) => {
            console.error('Error updating teacher:', error);
          }
        );
      } else {
        console.log('Adding teacher:', this.newTeacher);
        // debugger;
        this.teacherService.addTeacher(this.newTeacher).subscribe(
          (response) => {
            this.teachers.push(response);
            this.modal?.hide();
          },
          (error) => {
            console.error('Error adding teacher:', error);
          }
        );
      }
    }
  }

  deleteTeacher(id: number) {
    this.teacherService.deleteTeacher(id).subscribe(
      () => {
        this.teachers = this.teachers.filter(t => t.id !== id);
      },
      (error) => {
        console.error('Error deleting teacher:', error);
      }
    );
  }

  confirmDelete(id: number) {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.deleteTeacher(id);
    }
  }
}
