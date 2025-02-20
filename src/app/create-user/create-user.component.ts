import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  u: User = new User('', 0, '', '');
  isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['user']) {
      this.u = nav.extras.state['user'];
      this.isUpdate = true;
    }
  }

  onSubmit() {
    // debugger;
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    if (this.isUpdate) {
      users = users.map(zahid => (zahid.phone == this.u.phone ? this.u : zahid));


      // users = users.forEach(

      //   (user) => {
      //     if (user.phone == this.u.phone) {
      //       return this.u;
      //     } else {
      //       return user;
      //     }
      //   }
      // )

      for (let i = 0; i < users.length; i++) {
        if (users[i].phone == this.u.phone) {
          users[i] = this.u;
        }
      }

      //  users = users.map(
      //   (user) => {
      //     if (user.phone == this.u.phone) {
      //       return this.u;
      //     } else {
      //       return user;
      //     }
      //   }
      //  )
    } else {
      users.push(this.u);
    }

    localStorage.setItem('users', JSON.stringify(users));

    this.u = new User('', 0, '', '');
    // alert('User added successfully!');
    this.router.navigate(['/list']);
  }
}
