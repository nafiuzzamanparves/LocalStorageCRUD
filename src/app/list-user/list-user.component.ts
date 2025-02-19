import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  imports: [],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {
  faysal: User[] = [];

  constructor(private router: Router) { } // Dependency injection

  ngOnInit(): void {
    this.faysal = JSON.parse(localStorage.getItem('users') || '[]');
  }

  editUser(user: User) {
    this.router.navigate(['/create'], { state: { user } });
  }

  deleteUser(user: User) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.faysal = this.faysal.filter(u => u !== user);
      localStorage.setItem('users', JSON.stringify(this.faysal));
    }
  }

}
