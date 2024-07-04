// src/app/freelance/freelance.component.ts
import { Component } from '@angular/core';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
  selector: 'app-freelance',
  standalone: true,
  imports: [BackToTopComponent],
  template: `
    <section class="freelance">
      <h2>Freelance Business: brosfe</h2>
      <p>
        At brosfe, my freelance company, I offer a range of services including web design, app design,
        office software solutions, and AI consultancy. My goal is to provide tailored, innovative solutions
        to meet the unique needs of each client.
      </p>
      <a href="https://www.brosfe.com" target="_blank" class="cta-button">Visit brosfe.com</a>
      <app-back-to-top></app-back-to-top>
    </section>
  `,
  styles: [`
    .freelance {
      margin-top: 2rem;
      background-color: #e6f2ff;
      padding: 2rem;
      border-radius: 8px;
    }
    .cta-button {
      display: inline-block;
      background-color: #007bff;
      color: white;
      padding: 0.5rem 1rem;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 1rem;
    }
  `]
})
export class FreelanceComponent {}