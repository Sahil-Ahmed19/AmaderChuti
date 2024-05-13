import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsChoiceComponent } from './editors-choice.component';

describe('EditorsChoiceComponent', () => {
  let component: EditorsChoiceComponent;
  let fixture: ComponentFixture<EditorsChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorsChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorsChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
