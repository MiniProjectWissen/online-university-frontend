import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTestComponent } from './previous-test.component';

describe('PreviousTestComponent', () => {
  let component: PreviousTestComponent;
  let fixture: ComponentFixture<PreviousTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
