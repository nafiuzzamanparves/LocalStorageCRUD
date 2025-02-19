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
  u: User = new User('Iqram', 300, '324234234', 'Iqram thake dahakay');

  ngOnInit(): void {
    // debugger;
    let string = JSON.stringify(this.u);
    let obj = JSON.parse(string);

    console.log('CreateUserComponent');
  }

  onSubmit() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    // debugger;
    users.push(this.u);

    localStorage.setItem('users', JSON.stringify(users));

    this.u = new User('', 0, '', '');
    alert('User added successfully!');
  }
}
