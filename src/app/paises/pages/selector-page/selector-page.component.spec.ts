import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorPAgeComponent } from './selector-page.component';

describe('SelectorPAgeComponent', () => {
  let component: SelectorPAgeComponent;
  let fixture: ComponentFixture<SelectorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorPAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
