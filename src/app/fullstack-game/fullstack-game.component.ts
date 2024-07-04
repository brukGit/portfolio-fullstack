// src/app/fullstack-game/fullstack-game.component.ts
import { Component } from '@angular/core';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
  selector: 'app-fullstack-game',
  standalone: true,
  imports: [BackToTopComponent],
  template: `
    <section class="fullstack-game">
      <h2>Fullstack Game Project</h2>
      <p>
        Leveraging my skills in both frontend and backend development, I've created an engaging fullstack game.
        This project showcases my ability to build interactive, real-time applications using modern web technologies.
      </p>
      <a href="https://your-game-url.com" target="_blank" class="cta-button">Play the Game</a>
      <app-back-to-top></app-back-to-top>
    </section>
  `,
  styles: [`
    .fullstack-game {
      margin-top: 2rem;
      background-color: #f0e6ff;
      padding: 2rem;
      border-radius: 8px;
    }
    .cta-button {
      display: inline-block;
      background-color: #6c757d;
      color: white;
      padding: 0.5rem 1rem;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 1rem;
    }
  `]
})
export class FullstackGameComponent {}