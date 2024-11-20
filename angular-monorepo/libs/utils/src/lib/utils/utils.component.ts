import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'lib-utils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utils.component.html',
  styleUrl: './utils.component.css',
})
export class UtilsComponent {
  title$ = of('Utils');
}
