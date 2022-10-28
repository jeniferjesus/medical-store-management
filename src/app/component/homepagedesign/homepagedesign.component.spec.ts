import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagedesignComponent } from './homepagedesign.component';

describe('HomepagedesignComponent', () => {
  let component: HomepagedesignComponent;
  let fixture: ComponentFixture<HomepagedesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagedesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
