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
      <p>You will find more portolio projects at the website.</p>
      <p class="sub-note">Technologies used - React Js | Framer Motion | Express Js | MongoDB | Node Js | Figma</p>
      <a href="https://www.brosfe.com" target="_blank" class="cta-button">Visit brosfe.com</a>
      <app-back-to-top></app-back-to-top>
    </section>
  `,
  styles: [`
    .freelance {
      width: 80vw;
      margin:4rem auto;
      text-align: left;
      background-color: #3A4F8B;
      padding: 2rem;
      text-align: left;
      gap: 1rem;
      width: 80%;
      margin: 0 auto;
      color: #f5f5f5;
      position: relative;
      align-items: center;
    }
    
    .sub-note {
      font-weight: bold;
    }
    
  `]
})
export class FreelanceComponent {}