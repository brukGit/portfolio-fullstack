// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { FullstackGameComponent } from './fullstack-game/fullstack-game.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntroComponent, DashboardComponent, FreelanceComponent, FullstackGameComponent, ContactComponent],
  template: `
    <header>
      <h1>FirstName LastName</h1>
      <nav>
        <a href="#intro">Intro</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#freelance">Freelance</a>
        <a href="#fullstack-game">Fullstack Game</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <main>
      <app-intro id="intro"></app-intro>
      <app-dashboard id="dashboard"></app-dashboard>
      <app-freelance id="freelance"></app-freelance>
      <app-fullstack-game id="fullstack-game"></app-fullstack-game>
      <app-contact id="contact"></app-contact>
      
    </main>
    <footer>
      <p>&copy; 2024 FirstName LastName. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    header {
      background-color: #333;
      color: white;
      padding: 1rem;
    }
    nav {
      display: flex;
      justify-content: space-around;
    }
    nav a {
      color: white;
      text-decoration: none;
    }
    main {
      flex: 1;
      padding: 2rem;
    }
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 1rem;
    }
  `]
})
export class AppComponent {
  title = 'FirstName LastName - Portfolio';
}