// src/app/intro/intro.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  template: `
    <section class="intro">
      <h2>About Me</h2>
      <p>
        Hi, I'm FirstName LastName, an Electronic Engineer with an MSc degree and a passion for software development.
        With experience in NFC RF systems, LED technologies for vehicles, and a strong background in data science,
        I bring a unique blend of hardware and software expertise to every project.
      </p>
      <p>
        My goal is to leverage my skills in Python, JavaScript, and various web technologies to create innovative
        solutions that make a difference. I'm always eager to take on new challenges and continue learning in this
        ever-evolving field of technology.
      </p>
    </section>
  `,
  styles: [`
    .intro {
      background-color: #f4f4f4;
      padding: 2rem;
      border-radius: 8px;
    }
  `]
})
export class IntroComponent {}