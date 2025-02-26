import { Component } from '@angular/core';
import { CircleComponent } from "./circle/circle.component";

@Component({
  selector: 'app-flag',
  imports: [CircleComponent],
  templateUrl: './flag.component.html',
  styleUrl: './flag.component.css'
})
export class FlagComponent {

}
