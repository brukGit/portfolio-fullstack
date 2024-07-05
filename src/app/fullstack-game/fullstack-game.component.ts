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
        Leveraging my skills in both frontend and backend development, I've created a simple and engaging fullstack game.
        This project showcases my ability to build interactive, real-time applications using modern web technologies.
      </p>
      <p class="sub-note">Technologies used - React Js | Framer Motion | Express Js | MongoDB | Node Js | Figma</p>
      <a href="https://connect-four-pz-designs.onrender.com/" target="_blank" class="cta-button">Play the Game</a>
      <app-back-to-top></app-back-to-top>
    </section>
  `,
  styles: [`
    .fullstack-game {
      background-color: #E8E8F3;
      padding: 2rem;
      border-radius: 8px auto;
      text-align: left;
      gap: 1rem;
      width: 80%;
      margin: 0 auto;
      color: #2C3E50;
      position: relative;
    }
   
    .sub-note{
      font-weight:500;
    
     }
  `]
})
export class FullstackGameComponent {}