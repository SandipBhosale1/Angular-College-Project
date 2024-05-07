import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormSubmitComponent } from './contact-form-submit.component';

describe('ContactFormSubmitComponent', () => {
  let component: ContactFormSubmitComponent;
  let fixture: ComponentFixture<ContactFormSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormSubmitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactFormSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
