import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsComponent } from './ngs.component';

describe('NgsComponent', () => {
  let component: NgsComponent;
  let fixture: ComponentFixture<NgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
