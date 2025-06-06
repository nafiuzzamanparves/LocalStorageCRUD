import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagComponent } from './flag.component';

describe('FlagComponent', () => {
  let component: FlagComponent;
  let fixture: ComponentFixture<FlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
