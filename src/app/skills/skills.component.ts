import { Component } from '@angular/core';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [BackToTopComponent],
  template: `
   <section class="skills">
      <h2>Software Skills</h2>
      <h3>Advanced </h3>
     <ul class="skills-info">
     
       <li>Python </li>
       <li>Pandas </li>
       <li>Numpy </li>
       <li>Matplotlib </li>
       <li>Seaborn </li>
       <li>Scikit-learn </li>    
       <li>JavaScript </li>
       <li>HTML </li>
       <li>CSS </li>
       <li>React Js </li>
       <li>Express Js </li>
       <li>Node Js </li>
       <li>MongoDB </li>
       <li>SQL </li>
       <li>Git </li>
       <li>GitHub </li>
       <li>Power BI </li>
       <li>Figma </li>
       <li>Gannt </li>
       <li>Jira </li>
        <li>Slack </li>
       
       
      </ul>
      <h3>Intermediate </h3>
     <ul class="skills-info">
       <li>Angular Js </li>
       <li>Linux </li>
       <li>Altium </li>
       <li>Adobe Photoshop </li>
       <li>Adobe Illustrator </li>
       <li>Adobe XD </li>
       <li>Adobe After Effects </li>
       <li>Adobe Premiere Pro </li>
       <li>Adobe Indesign </li>
      
       
      </ul>
    
      <app-back-to-top></app-back-to-top>
    </section>
  `,
  styles: [`
    .skills {
      background-color: #3A4F8B;
      padding: 2rem;
      border-radius: auto 88px;
      text-align: left;
      gap: 1rem;
      width: 80%;
      margin: 0 auto;
      color: #f5f5f5;
      position: relative;
    }
    .skills-info {
      
      list-style-type: none;
      padding: 0;
      margin-bottom: 1rem;
    }
    .skills-info li {
      display: inline;
      padding-right: 1rem;
      margin-bottom: 0.5rem;
    }
    a {
      color: #f5f5f5;
      text-decoration: none;
    }
    .cta-button {
      display: inline-block;
      
      background-color: #FF8C42;
      color: #1F3A93;
      text-decoration: none;
      
      margin-top: 20px;
      margin-left: 30vw;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
    }
    .cta-button:hover { 
      color: #FF8C42;
      background-color: #1F3A93;
      text-decoration: none;
     
      transition: background-color 0.3s ease;
      
    }
  `]
})
export class SkillsComponent {

}
