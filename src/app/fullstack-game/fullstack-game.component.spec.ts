import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackGameComponent } from './fullstack-game.component';

describe('FullstackGameComponent', () => {
  let component: FullstackGameComponent;
  let fixture: ComponentFixture<FullstackGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullstackGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullstackGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
