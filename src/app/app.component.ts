import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LocalStorageCRUD';


}

export class User {
  name: string;
  age: number;
  phone: string;
  address: string;

  constructor(name: string, age: number, phone: string, address: string) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}
