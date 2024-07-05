// src/app/back-to-top/back-to-top.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <!-- <button (click)="scrollToTop()" class="back-to-top">Back to Top</button> -->
    <button (click)="scrollToTop()" class="back-to-top" [class.smallScreen]="isSmallScreen">
  <i class="fas fa-arrow-up"></i>
</button>

  `,
  styles: [`
    .back-to-top {
      position:absolute;
      bottom: 10px;
      left: 20px;
      display: inline-block;
      
      background-color:none;
      color: #2C3E50;
      text-decoration: none;
      
      margin-top: 20px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      padding: 0.25rem 1rem;
      border-radius: 0.25rem;
      border: 1px solid #2C3E50;
    }
    .back-to-top.smallScreen {
      bottom: 2px;
      left: 10px;
      padding: 0.25rem 0.5rem;
      border-radius: 0.15rem;
    }
    .back-to-top:hover {
      border: 1px solid #FF8C42;
      color: #FF8C42;
      // background-color: #1F3A93;
      text-decoration: none;
     
      transition: background-color 0.3s ease;
      
    }
  `]
})
export class BackToTopComponent {
  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmallScreen = window.innerWidth < 650;
  }

  ngOnInit() {
    this.isSmallScreen = window.innerWidth < 650;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}