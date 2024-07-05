// src/app/contact/contact.component.ts
import { Component } from '@angular/core';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BackToTopComponent],
  template: `
    <section class="contact">
      <h2>Let's Connect</h2>
      <p>
        I'm always open to new opportunities and collaborations. If you're looking for a passionate
        fullstack developer with a unique blend of software, data analysis, electronics and multi-disciplinary expertise, let's talk!
      </p>
      <ul class="contact-info">
        <li>Email: <a href="mailto:abrahabiruke@gmail.com">abrahabiruke&#64;gmail.com</a></li>
        <li>Phone: (+251) 974-052565</li>
        <li>LinkedIn: <a href=" https://www.linkedin.com/in/biruke-abraha" target="_blank">Biruke Abraha</a></li>
      </ul>
      <a href="mailto:abrahabiruke@gmail.com" class="cta-button">Get in Touch</a>
      <app-back-to-top></app-back-to-top>
    </section>
  `,
  styles: [`
    .contact {
      background-color: #E8E8F3;
      padding: 2rem;
      border-radius: 0 0 16px 16px;
      text-align: left;
      gap: 1rem;
      width: 80%;
      margin: 0 auto;
      color: #2C3E50;
      position: relative;
    }
    .contact-info {
      list-style-type: none;
      padding: 0;
    }
    .contact-info li {
      margin-bottom: 0.5rem;
    }
    a {
      color: #2C3E50;
      text-decoration: none;
    }
   
  `]
})
export class ContactComponent {}