import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
  standalone: true
})
export class CreateUserComponent implements OnInit {
  user: User = new User('', 0, '', '');

  ngOnInit(): void {
    console.log('CreateUserComponent');

    // write a text to local storage
    localStorage.setItem('name', 'John');
    localStorage.setItem('age', '25');
    localStorage.setItem('phone', '1234567890');
    localStorage.setItem('address', '123 Main Street');
  }

  onSubmit() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    // debugger;
    users.push(this.user);

    localStorage.setItem('users', JSON.stringify(users));

    this.user = new User('', 0, '', '');
    alert('User added successfully!');
  }

}
