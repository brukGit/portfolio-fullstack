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
        As part of my recent project, I developed an advanced online dashboard that serves as a comprehensive
        data collection, analysis, and visualization platform. This dashboard gathers data from multiple sources,
        focusing on countries' external debt, socioeconomic and macroeconomic data, as well as data on six strategic sectors.
      </p>
      <div class="dashboard-iframe">
        <!-- Replace the src with your actual Power BI dashboard embed URL -->
        <iframe title="Water access and distribution - Maji Ndogo" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZmM1ZDY4MmMtYjEwMi00MDU4LThkYmYtNTljYmUyNzFkM2E1IiwidCI6ImFiYTRhZjg0LTI3ZmQtNDBkMS1iYmMzLThkYWQ2MGVjZWFiNyJ9" frameborder="0" allowFullScreen="true"></iframe>
      </div>
      <app-back-to-top></app-back-to-top>
    </section>
  `,
  styles: [`
    .dashboard {
      margin-top: 2rem;
    }
    .dashboard-iframe {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
    }
  `]
})
export class DashboardComponent {}