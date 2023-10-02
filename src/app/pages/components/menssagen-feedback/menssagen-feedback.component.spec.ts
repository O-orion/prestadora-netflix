import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenssagenFeedbackComponent } from './menssagen-feedback.component';

describe('MenssagenFeedbackComponent', () => {
  let component: MenssagenFeedbackComponent;
  let fixture: ComponentFixture<MenssagenFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenssagenFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenssagenFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
