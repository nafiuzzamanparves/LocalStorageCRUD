import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngs',
  // imports: [NgFor, NgIf, CommonModule],
  imports: [CommonModule],
  templateUrl: './ngs.component.html',
  styleUrl: './ngs.component.css'
})
export class NgsComponent {
  // Give some array of user information
  users = [
    { name: 'John', age: 30, phone: '1234567890', address: 'New York' },
    { name: 'Jane', age: 25, phone: '9876543210', address: 'Los Angeles' },
    { name: 'Bob', age: 35, phone: '5555555555', address: 'Chicago' },
    { name: 'Alice', age: 40, phone: '1111111111', address: 'London' },
  ];

  showName = false;
  mulloDiteHobe = false;

}
