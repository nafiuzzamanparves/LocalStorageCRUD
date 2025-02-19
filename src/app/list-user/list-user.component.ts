import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-list-user',
  imports: [],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {
  faysal: User[] = [];

  ngOnInit(): void {
    // Retrieve users from local storage
    this.faysal = JSON.parse(localStorage.getItem('users') || '[]');
  }
}
