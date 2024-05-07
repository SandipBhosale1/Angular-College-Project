import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplesDeskComponent } from './principles-desk.component';

describe('PrinciplesDeskComponent', () => {
  let component: PrinciplesDeskComponent;
  let fixture: ComponentFixture<PrinciplesDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrinciplesDeskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrinciplesDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
