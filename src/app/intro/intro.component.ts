// src/app/intro/intro.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  template: `
    <section class="intro" [class.column]="isSmallScreen">
      <div class="image-container"  [class.fullwidth]="isSmallScreen">
      <img src="assets/images/portrait.png" alt="FirstName LastName" class="profile-image">
      <p class="description" [class.halfwidth]="isSmallScreen">Software Developer | Electronics Engineer | Data Analayst</p>
    
      </div>
      <div class="intro-statement-container" [class.fullwidth]="isSmallScreen">
      <p>
        Hi, I'm an Electronic Engineer with an MSc degree and a strong experience and passion for software development.
        With experience in fullstack web development, and a strong background in data analytics, data science and dashboard designs,
        I bring a unique blend of multi-disciplinary skills and creativity to my work.
      </p>
      <p>
        My goal is to leverage my skills in many areas of data analysis and fullstack web development to create innovative
        solutions that make a difference. I'm always eager to take on new challenges and continue learning in this
        ever-evolving field of technology.
      </p>
      <p><i>Biruke Abraha</i></p>
      </div>
     
    </section>
    <section>
    <!-- <div class="line-center"></div> -->

    </section>
  `,
  styles: [`
    .intro {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      // background-color: #f4f4f4;
      background-color: #3A4F8B;  
      padding: 2rem;
      border-radius: 16px 16px 0 0;
      text-align: center;
      gap: 1rem;
      width: 80%;
      margin: 0 auto;
      color: #f5f5f5;
      position: relative;
      font-family: 'Roboto', sans-serif;
    }
    .intro.column {
  flex-direction: column;
  // width: 80%;
}
    .image-container{
      width: 20vw;
    }
    .image-container.fullwidth {
      width: 100%;
      display:flex;
      text-align: left;
      align-items: flex-end;
    }
    .description {
      background-color: #f5f5f5;
      border-radius: 8px;
      padding: 0.5rem;
      font-weight: 400;
      color: #3A4F8B; //3A4F8B  2C3E50
      text-align: left;
      width: 100%;
    }
    p.halfwidth {
      width: 50%;
    }
    img{
      display: block;
    }
    

    .profile-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1rem;
    }
   
    .intro-statement-container {
      text-align: left;
      width: 60%;
      margin: 0 auto;

    }
    .intro-statement-container.fullwidth {
      width: 90%;
      text-align: left;
      margin: 0 auto;
    }
    .line-center {
    width: 35%; /* Adjust the width as needed */
    margin: 0 auto; /* Center the line */
    border-bottom: 2.5px solid #1F3A93;
}

  `]
})
export class IntroComponent {
  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmallScreen = window.innerWidth < 650;
  }

  ngOnInit() {
    this.isSmallScreen = window.innerWidth < 650;
  }
 }