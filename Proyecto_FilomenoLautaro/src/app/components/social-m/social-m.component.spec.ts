import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMComponent } from './social-m.component';

describe('SocialMComponent', () => {
  let component: SocialMComponent;
  let fixture: ComponentFixture<SocialMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
