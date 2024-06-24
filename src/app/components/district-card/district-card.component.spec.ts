import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictCardComponent } from './district-card.component';

describe('DistrictCardComponent', () => {
  let component: DistrictCardComponent;
  let fixture: ComponentFixture<DistrictCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
