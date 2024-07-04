// src/app/back-to-top/back-to-top.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <button (click)="scrollToTop()" class="back-to-top">Back to Top</button>
  `,
  styles: [`
    .back-to-top {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 20px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .back-to-top:hover {
      background-color: #0056b3;
    }
  `]
})
export class BackToTopComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}