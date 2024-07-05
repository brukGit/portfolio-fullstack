// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BackToTopComponent],
  template: `
    <section class="dashboard">
      <h2>Interactive Dashboard</h2>
      <p>
        As part of my project for my data science study, I developed an advanced dashboard for a fictional country Maji Ndogo in Africa, that serves as a comprehensive
        data analysis, and visualization platform for wide ranges of topics on the country's water access and distribution. This dashboard was built using data from multiple sources,
        focusing on the Maji Ndogo's water distibution, water health, finances, and related socioeconomic indicators. The dashboard was built using Microsft's Power BI. 
        
      </p>
      <p class="sub-note">Technologies used - Google Sheet | SQL | DAX | Power BI | Figma</p>
      <div class="dashboard-iframe">
        <!-- Replace the src with your actual Power BI dashboard embed URL -->
        <iframe title="Water access and distribution - Maji Ndogo" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZmM1ZDY4MmMtYjEwMi00MDU4LThkYmYtNTljYmUyNzFkM2E1IiwidCI6ImFiYTRhZjg0LTI3ZmQtNDBkMS1iYmMzLThkYWQ2MGVjZWFiNyJ9" frameborder="0" allowFullScreen="true"></iframe>
      </div>
      <app-back-to-top></app-back-to-top>
    </section>
  `,
  styles: [`
    .dashboard {
     
      width: 80vw;
      margin:4rem auto;
      text-align: left;
      background-color: #E8E8F3;
      padding: 2rem;
      border-radius: auto 8px;
      text-align: left;
      gap: 1rem;
      width: 80%;
      margin: 0 auto;
      position: relative;
    }
    .dashboard-iframe {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
    }
    h2{
      text-transform: uppercase;
      color: #2C3E50;
    }
    .sub-note{
      font-weight:500;
    
     }
  `]
})
export class DashboardComponent {}