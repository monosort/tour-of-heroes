import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-nested',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nested.component.html',
  styleUrl: './nested.component.css',
})
export class NestedComponent {}
