// src/app/app.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { FullstackGameComponent } from './fullstack-game/fullstack-game.component';
import { ContactComponent } from './contact/contact.component';
import {SkillsComponent} from "./skills/skills.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntroComponent, DashboardComponent, FreelanceComponent, 
    FullstackGameComponent, ContactComponent, SkillsComponent],
  template: `
    <header>
      <h1 class="logo">Biruke Abraha</h1>
      <nav [class.column]="isSmallScreen">
        <a href="#intro">Intro</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#freelance">Freelance</a>
        <a href="#fullstack-game">Fullstack Game</a>
        <a href="#skills">Software Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <main>
      <app-intro id="intro"></app-intro>
      <app-dashboard id="dashboard"></app-dashboard>
      <app-freelance id="freelance"></app-freelance>
      <app-fullstack-game id="fullstack-game"></app-fullstack-game>
      <app-skills id="skills"></app-skills>
      <app-contact id="contact"></app-contact>
     
      
    </main>
    <footer>
      <p>&copy; 2024 Biruke Abraha. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    header {
      background-color: #f5f5f5;
      color: #1F3A93;
      padding: 1rem;

    
    }
    nav {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    nav.column {
      flex-direction: column;
      gap: 0.35rem;
    }
  
    nav a {
      color: #1F3A93;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      transition: background-color 0.3s ease;
    }
    nav a:hover{
      color: #FF8C42;
      background-color: #1F3A93;
    }
    main {
      flex: 1;
      padding: 2rem;
      background-color: #F4F4F9;
      color: #2C3E50;
     
    }
    footer {
      background-color: #f5f5f5;
      color: #1F3A93;
      text-align: center;
      padding: 1rem;
    }
  `]
})
export class AppComponent {
  title = 'Abraha Biruke - Portfolio';

  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmallScreen = window.innerWidth < 650;
  }

  ngOnInit() {
    this.isSmallScreen = window.innerWidth < 650;
  }
}