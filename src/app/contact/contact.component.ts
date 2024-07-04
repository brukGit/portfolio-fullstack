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
        developer with a unique blend of hardware and software expertise, let's talk!
      </p>
      <ul class="contact-info">
        <li>Email: <a href="mailto:email@email.com">email_gmail.com</a></li>
        <li>Phone: (+xxx) xxx-xxxxxx</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/link" target="_blank">FirstName LastName</a></li>
      </ul>
      <a href="mailto:email@email.com" class="cta-button">Get in Touch</a>
      <app-back-to-top></app-back-to-top>
    </section>
  `,
  styles: [`
    .contact {
      margin-top: 2rem;
      background-color: #e6ffe6;
      padding: 2rem;
      border-radius: 8px;
    }
    .contact-info {
      list-style-type: none;
      padding: 0;
    }
    .contact-info li {
      margin-bottom: 0.5rem;
    }
    .cta-button {
      display: inline-block;
      background-color: #28a745;
      color: white;
      padding: 0.5rem 1rem;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 1rem;
    }
  `]
})
export class ContactComponent {}